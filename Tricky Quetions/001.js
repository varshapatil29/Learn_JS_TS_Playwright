// ******** 1 ***********

console.log(0b1010 + 0o10 + 0xA);

/* Options : 
- 28
- NaN
- 0b10100o100xA
- 30


 0b - binary no 
   1010 - 10
   0o - Octal no 
   10 - 8 
   0x - Hexadecimal no 
   A - 10

   Output : 10 + 8 + 10 = 28
 */


// ******** 2 *********** 

console.log([1, , 3, ].length);

/* Options : 
- 2
- **3**
- SyntaxError
- 4
> Tricky one. Count the slots, not the values. The correct answer is 3.

  Output : 3
 */
