Keywords are reserved or special words that have a predefined meaning in JavaScript, such as let, const, if, else, function, return, class, and for
Example:
```javascript
const userName = "Varsha";
```


| Part | Meaning |
|---|---|
| `const` | Keyword |
| `userName` | Identifier |
| `"Varsha"` | Value |

---


### Examples

```text
let
const
var
if
else
for
while
function
return
class
new
this
try
catch
throw
async
await
switch
case
break
continue
```

Example:

```javascript
let age = 29;

if (age >= 18) {
    console.log("Adult");
}
```

Here:

- `let` → keyword
- `if` → keyword
- `let` tells JavaScript to declare a variable.
- `if` tells JavaScript to evaluate a condition.

---


# Common JavaScript Keywords

### Variable declaration

```javascript
let
const
var
```

Example:

```javascript
let age = 20;
const country = "India";
```

---

### Conditional statements

```javascript
if
else
switch
case
default
```
---

### Loops

```javascript
for
while
do
break
continue
```
---

### Functions

```javascript
function
return
```

### Classes and objects

```javascript
class
extends
constructor
new
this
super
```
---

### Error handling

```javascript
try
catch
finally
throw
```
---

### Asynchronous programming

```javascript
async
await
```

Rules of Keywords

Keywords have a predefined meaning in JavaScript.

Keywords are part of the language syntax.

Keywords cannot normally be used as ordinary identifiers.

Keywords are defined by the programming language, not by the programmer.

Some reserved words have restrictions depending on the context in which they are used.
---
# Identifiers

An **identifier** is a name given by the programmer to identify a program element.

Identifiers can be used for:

- Variables
- Functions
- Classes
- Function parameters
- Objects/properties in appropriate syntax
- Other declared program elements

Example:

```javascript
let userName = "Varsha";
```

Here:

```text
let       → Keyword
userName  → Identifier
"Varsha"    → Value
```


---
 Invalid Example

let let = 10;

let is already a keyword, so it cannot be used as an ordinary variable name.
#  Why Do We Need Identifiers?

Identifiers allow us to refer to data and program elements later.

Example:

```javascript
let age = 20;

console.log(age);
```

`age` is the identifier.

When JavaScript executes:

```javascript
console.log(age);
```

it uses the identifier `age` to access the value `20`.


---
#  Rules for Identifiers

Can start with a letter

let name = "Varsha";

 Valid

2. Can start with _

let _name = "Varsha";

 Valid

3. Can start with $

let $price = 100;

 Valid

4. Numbers can be used after the first character

let user123 = "Varsha";

 Valid

5. Cannot start with a number

let 123user = "Varsha";

 Invalid

6. Spaces are not allowed

let first name = "Varsha";

 Invalid

Use:

let firstName = "Varsha";

 Valid

7. Normal identifiers cannot contain special characters such as -, @, #, %

let user-name = "Varsha";

 Invalid as a normal identifier.

Use:

let userName = "Varsha";

 Valid

8. Identifiers are case-sensitive

let name = "Varsha";
let Name = "Anu";

name and Name are different identifiers.

console.log(name);
console.log(Name);

9. Keywords cannot be used as ordinary identifiers

let class = "QA";

Use:

let className = "QA";

 Valid

Naming Conventions

camelCase

Commonly used for variables and functions in JavaScript.

let firstName = "Varsha";
let employeeId = 101;

function loginUser() {
}

PascalCase

Commonly used for classes.

class LoginPage {
}

UPPER_SNAKE_CASE

Often used by convention for constants.

const MAX_RETRY_COUNT = 3;
const BASE_URL = "https://example.com";

Naming conventions are recommendations for readable code, not the same as syntax rules.