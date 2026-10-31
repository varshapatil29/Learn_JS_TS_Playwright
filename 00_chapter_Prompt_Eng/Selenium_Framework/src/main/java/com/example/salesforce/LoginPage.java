package com.example.salesforce;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public final class LoginPage {
    private static final Duration WAIT_TIMEOUT = Duration.ofSeconds(15);

    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement loginError;

    public LoginPage(WebDriver driver) {
        if (driver == null) {
            throw new IllegalArgumentException("WebDriver must not be null");
        }
        this.driver = driver;
        this.wait = new WebDriverWait(driver, WAIT_TIMEOUT);
        PageFactory.initElements(driver, this);
    }

    public void login(String user, String pass) {
        try {
            WebElement usernameField = wait.until(ExpectedConditions.visibilityOf(username));
            usernameField.clear();
            usernameField.sendKeys(user);

            WebElement passwordField = wait.until(ExpectedConditions.visibilityOf(password));
            passwordField.clear();
            passwordField.sendKeys(pass);

            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        } catch (RuntimeException exception) {
            throw new IllegalStateException("Unable to submit the Salesforce login form", exception);
        }
    }

    public String waitForLoginError() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginError)).getText().trim();
        } catch (RuntimeException exception) {
            throw new IllegalStateException("Salesforce login error did not become visible", exception);
        }
    }

    public boolean isRememberMeSelected() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(rememberMeCheckbox)).isSelected();
        } catch (RuntimeException exception) {
            throw new IllegalStateException("Unable to read the remember-me checkbox state", exception);
        }
    }

    public void toggleRememberMe() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(rememberMeCheckbox)).click();
        } catch (RuntimeException exception) {
            throw new IllegalStateException("Unable to toggle the remember-me checkbox", exception);
        }
    }

    public boolean waitForAuthenticationResult() {
        try {
            return wait.until(currentDriver ->
                    isLoginErrorVisible() || !currentDriver.getCurrentUrl().contains("login.salesforce.com")
            ) && !driver.getCurrentUrl().contains("login.salesforce.com");
        } catch (RuntimeException exception) {
            throw new IllegalStateException("Salesforce authentication did not complete", exception);
        }
    }

    private boolean isLoginErrorVisible() {
        try {
            return driver.findElement(By.xpath("//div[@id='error']")).isDisplayed();
        } catch (RuntimeException exception) {
            return false;
        }
    }
}
