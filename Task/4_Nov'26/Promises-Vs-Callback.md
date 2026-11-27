# JavaScript Callbacks and Promises

## 1. What is asynchronous programming?

JavaScript normally executes synchronous code line by line.

``` javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

Output:

``` text
Step 1
Step 2
Step 3
```

Some operations take time, such as downloading a file, calling an API,
or waiting for a mobile application to load. JavaScript can schedule
these operations without blocking all other work. This is asynchronous
programming.

``` javascript
console.log("Step 1");

setTimeout(() => {
    console.log("Step 2");
}, 2000);

console.log("Step 3");
```

Output:

``` text
Step 1
Step 3
Step 2
```

`setTimeout()` schedules the callback to run after approximately two
seconds. The rest of the synchronous code continues in the meantime.

------------------------------------------------------------------------

## 2. What is a Callback?

A **callback is a function passed as an argument to another function.
The receiving function calls it when appropriate.**

Callbacks can be synchronous or asynchronous.

### Example 1: Basic callback

``` javascript
function greet(name) {
    console.log("Hello " + name);
}

function userDetails(callback) {
    let name = "Jisha";
    callback(name);
}

userDetails(greet);
```

Output:

``` text
Hello Jisha
```

Step by step:

1.  `greet()` is a function that accepts a name.
2.  `userDetails()` accepts a function as its `callback` parameter.
3.  `userDetails()` creates the name `"Jisha"`.
4.  `callback(name)` invokes the function that was passed in.
5.  In this example, that is equivalent to calling `greet("Jisha")`.

Notice that `greet` is passed without parentheses. This passes the
function itself rather than calling it immediately.

### Example 2: Asynchronous callback

``` javascript
function downloadFile(callback) {
    console.log("Downloading file...");

    setTimeout(() => {
        console.log("Download completed!");
        callback();
    }, 2000);
}

function fileDownloaded() {
    console.log("Now opening the file...");
}

downloadFile(fileDownloaded);
```

Output:

``` text
Downloading file...
Download completed!
Now opening the file...
```

The timer simulates a download that takes two seconds. When the timer
callback runs, it calls `fileDownloaded()`.

### Advantages of callbacks

-   Simple for small tasks.
-   Useful for event handling.
-   Allow code to run when an operation or event completes.
-   Common in JavaScript APIs and libraries.

### Limitations of callbacks

When many asynchronous operations depend on one another, callbacks can
become deeply nested. This is often called **callback hell**.

``` javascript
loginUser(function(user) {
    getUserDetails(user, function(details) {
        getAccountDetails(details, function(account) {
            getTransactions(account, function(transactions) {
                console.log(transactions);
            });
        });
    });
});
```

Deep nesting can make code harder to read, debug, maintain, and handle
errors in consistently.

------------------------------------------------------------------------

## 3. What is a Promise?

A **Promise is a JavaScript object that represents the eventual success
or failure of an asynchronous operation.**

A Promise has three possible states:

  State       Meaning
  ----------- --------------------------------------
  Pending     The operation has not settled yet
  Fulfilled   The operation completed successfully
  Rejected    The operation failed

A Promise starts pending and eventually becomes fulfilled or rejected.
Once settled, its state cannot change again.

### Creating a Promise

``` javascript
const myPromise = new Promise((resolve, reject) => {
    // Perform an operation
});
```

-   `resolve(value)` fulfills the Promise with a value.
-   `reject(error)` rejects the Promise with a reason or error.

### Example 1: Successful Promise

``` javascript
const myPromise = new Promise((resolve, reject) => {
    let downloadCompleted = true;

    if (downloadCompleted) {
        resolve("File downloaded successfully");
    } else {
        reject("Download failed");
    }
});

myPromise.then((result) => {
    console.log(result);
});
```

Output:

``` text
File downloaded successfully
```

`.then()` registers a handler that runs when the Promise is fulfilled.

### Example 2: Rejected Promise

``` javascript
const myPromise = new Promise((resolve, reject) => {
    let downloadCompleted = false;

    if (downloadCompleted) {
        resolve("Download successful");
    } else {
        reject("Download failed");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

``` text
Download failed
```

-   `.then()` handles fulfillment.
-   `.catch()` handles rejection.

### Example 3: Promise with `setTimeout()`

``` javascript
function getUserData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");

        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}

getUserData().then((result) => {
    console.log(result);
});
```

Output:

``` text
Fetching user data...
User data received
```

The function returns a Promise. The result becomes available after the
timer completes.

------------------------------------------------------------------------

## 4. What is Promise chaining?

Promise chaining allows multiple asynchronous operations to run in
sequence. Each `.then()` can return a value or another Promise for the
next handler.

``` javascript
loginUser()
    .then((user) => {
        return getUserDetails(user);
    })
    .then((details) => {
        return getAccountDetails(details);
    })
    .then((account) => {
        return getTransactions(account);
    })
    .then((transactions) => {
        console.log(transactions);
    })
    .catch((error) => {
        console.log(error);
    });
```

The result returned by one `.then()` is passed to the next `.then()`. A
rejection can be handled by the `.catch()` at the end of the chain.

------------------------------------------------------------------------

## 5. Callback vs Promise

  -----------------------------------------------------------------------
  Feature                 Callback                Promise
  ----------------------- ----------------------- -----------------------
  What it is              A function passed to    An object representing
                          another function        a future result

  Error handling          Depends on the API;     Supports rejection
                          often uses error-first  handlers such as
                          callback conventions    `.catch()`

  Chaining                Can require nested      Supports `.then()`
                          callbacks               chaining

  Readability             Can become difficult    Often easier to
                          with deep nesting       structure for sequences

  State                   No built-in Promise     Pending, fulfilled, or
                          state                   rejected

  Multiple async          Can become nested and   Easier to chain or
  operations              difficult to coordinate combine

  Common uses             Event handlers and      API requests and
                          callback-based APIs     asynchronous workflows
  -----------------------------------------------------------------------

### Advantages and limitations summary

**Callbacks**

Advantages: - Straightforward for simple tasks. - Useful for events and
APIs designed around callbacks.

Limitations: - Deep nesting can lead to callback hell. - Error handling
and coordination depend on the callback API's design.

**Promises**

Advantages: - Provide a consistent representation of an asynchronous
result. - Support chaining and structured rejection handling. - Work
naturally with `async`/`await`.

Limitations: - Chaining and error propagation take practice to
understand. - A Promise represents one eventual result; it does not make
an operation itself faster.

------------------------------------------------------------------------

## 6. What are `async` and `await`?

`async` and `await` provide a cleaner syntax for working with Promises.

-   An `async` function always returns a Promise.
-   `await` waits for a Promise to settle and gives the fulfilled value.
    If the Promise rejects, `await` throws the rejection reason.
-   `await` is used inside an `async` function, or at the top level of a
    JavaScript module that supports top-level await.

Consider this Promise-returning function:

``` javascript
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}
```

Using `.then()`:

``` javascript
getUserData().then((result) => {
    console.log(result);
});
```

Using `async` and `await`:

``` javascript
async function displayUserData() {
    const result = await getUserData();
    console.log(result);
}

displayUserData();
```

Both approaches print:

``` text
User data received
```

### Error handling with `async` and `await`

Use `try`/`catch` to handle a rejected Promise:

``` javascript
async function displayUserData() {
    try {
        const result = await getUserData();
        console.log(result);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

displayUserData();
```

------------------------------------------------------------------------

## 7. How this applies to Appium and WebdriverIO

WebdriverIO provides Promise-based commands. That is why mobile
automation tests commonly use `async` and `await`.

Example:

``` typescript
describe("Android Login Test", () => {
    it("should verify the login button", async () => {
        const loginButton = await $("~login_button");

        await loginButton.click();

        await expect(loginButton).toBeDisplayed();
    });
});
```

What the statements do:

  ---------------------------------------------------------------------------------
  Statement                                     Purpose
  --------------------------------------------- -----------------------------------
  `await $("~login_button")`                    Finds the element using its
                                                Accessibility ID

  `await loginButton.click()`                   Waits for the click command to
                                                complete

  `await expect(loginButton).toBeDisplayed()`   Waits for the WebdriverIO assertion
                                                to complete
  ---------------------------------------------------------------------------------

`~login_button` is an example selector. Replace it with the actual
Accessibility ID found in Appium Inspector.

You generally do not need to create a `new Promise()` manually for every
Appium operation. WebdriverIO already provides Promise-based APIs.

------------------------------------------------------------------------

## 8. Practice exercises

Try these exercises in your JavaScript project.

### Exercise 1: Callback

Create a function called `calculateSquare` that accepts a number and a
callback. Calculate the square and pass the result to the callback.

Expected usage:

``` javascript
calculateSquare(5, callbackFunction);
```

Expected output:

``` text
25
```

### Exercise 2: Promise

Create a Promise that resolves with the message `"Login Successful"`
after two seconds.

Requirements: - Use `setTimeout()`. - Use `resolve()`. - Print the
result using `.then()`.

### Exercise 3: Async/Await

Reuse the Promise from Exercise 2.

Requirements: - Create an `async` function. - Use `await` to get the
resolved message. - Use `try`/`catch` to handle a possible rejection.

------------------------------------------------------------------------

## 9. Final takeaway

-   **Callback:** A function passed to another function to be called
    when appropriate.
-   **Promise:** An object representing the eventual success or failure
    of an asynchronous operation.
-   **Async/Await:** Syntax that makes Promise-based code easier to read
    and write.

For mobile automation with Appium and WebdriverIO, focus especially on
Promises, `async`/`await`, and `try`/`catch`, because WebdriverIO
interactions are Promise-based.
