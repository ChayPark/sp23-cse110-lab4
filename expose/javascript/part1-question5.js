At line 12, a ReferenceError will be thrown because i is declared using let inside the for loop block, which means its scope is limited to the loop block only. 
Therefore, i will not be accessible outside the loop block, and attempting to log its value using console.log(i) will result in a ReferenceError.
