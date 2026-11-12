

let retry = 0;

do {
    console.log("Executing the code....");
    console.log("Retrying.....",retry);
    retry++;
} while (retry < 3);


// Output:
// Executing the code....
// Retrying..... 0
// Executing the code....
// Retrying..... 1
// Executing the code....
// Retrying..... 2