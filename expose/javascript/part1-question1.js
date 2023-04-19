Line 9 (console.log('final result: ', result);) will print the value of result to the console.
However, in the given code, the console.log statement is outside of the if block, so it will always be executed, even if add is falsy and the result variable has not been defined. 
Therefore, this situation can cause a ReferenceError will be thrown, since result is not defined.
