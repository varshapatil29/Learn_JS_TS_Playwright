package com.example.salesforce;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.WebDriverException;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class LoginTest {
    private static final String DEFAULT_LOGIN_URL = "https://login.salesforce.com/?locale=in";
    private static final String INVALID_USERNAME = "invalid-user@example.com";
    private static final String INVALID_PASSWORD = "invalid-password";

    private WebDriver driver;
    private String loginUrl;

    @BeforeTest
    public void configureSuite() {
        loginUrl = System.getProperty("selenium.baseUrl", DEFAULT_LOGIN_URL);
        if (!loginUrl.startsWith("https://")) {
            throw new IllegalArgumentException("selenium.baseUrl must use HTTPS");
        }
    }

    @BeforeMethod
    public void setUp() {
        try {
            ChromeOptions options = new ChromeOptions();
            if (Boolean.parseBoolean(System.getProperty("selenium.headless", "false"))) {
                options.addArguments("--headless=new");
            }
            options.addArguments("--window-size=1440,1000");

            driver = new ChromeDriver(options);
            driver.manage().timeouts().implicitlyWait(Duration.ZERO);
            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
            driver.get(loginUrl);
        } catch (WebDriverException exception) {
            if (driver != null) {
                driver.quit();
                driver = null;
            }
            throw new IllegalStateException("Unable to start Chrome or open the Salesforce login page", exception);
        }
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            try {
                driver.quit();
            } catch (WebDriverException exception) {
                throw new IllegalStateException("Unable to close the Chrome WebDriver", exception);
            } finally {
                driver = null;
            }
        }
    }

    @Test
    public void validCredentialsShouldAuthenticate() {
        String username = System.getenv("SALESFORCE_USERNAME");
        String password = System.getenv("SALESFORCE_PASSWORD");
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new SkipException("Set SALESFORCE_USERNAME and SALESFORCE_PASSWORD to run the valid-login test");
        }

        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.login(username, password);
            Assert.assertTrue(loginPage.waitForAuthenticationResult(),
                    "Expected valid credentials to leave the Salesforce login page");
        } catch (RuntimeException exception) {
            throw new AssertionError("Valid Salesforce login test failed", exception);
        }
    }

    @Test(dataProvider = "invalidCredentials")
    public void invalidCredentialsShouldDisplayError(String username, String password) {
        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.login(username, password);
            Assert.assertFalse(loginPage.waitForLoginError().isBlank(),
                    "Expected Salesforce to display an error for invalid credentials");
        } catch (RuntimeException exception) {
            throw new AssertionError("Invalid Salesforce login test failed", exception);
        }
    }

    @Test
    public void rememberMeCheckboxShouldToggle() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            boolean initialState = loginPage.isRememberMeSelected();
            loginPage.toggleRememberMe();
            Assert.assertNotEquals(loginPage.isRememberMeSelected(), initialState,
                    "Expected the remember-me checkbox state to change after clicking it");
        } catch (RuntimeException exception) {
            throw new AssertionError("Salesforce remember-me checkbox test failed", exception);
        }
    }

    @DataProvider(name = "invalidCredentials")
    public Object[][] invalidCredentials() {
        return new Object[][] {
                {INVALID_USERNAME, INVALID_PASSWORD},
                {"", INVALID_PASSWORD},
                {INVALID_USERNAME, ""}
        };
    }
}
