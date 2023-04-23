At line 12, the function will throw a ReferenceError because the variable i is declared with the let keyword inside the for loop and is therefore only accessible within the loop's block scope.
Since the console.log(i) statement is outside of the loop block, i is not defined and will result in an error. 
If the goal is to output the value of i after the loop has finished executing, then the console.log(i) statement should be moved outside of the loop block, after the closing curly brace of the for loop.
However, this will not affect the returned value of the function, which will still be the array [50, 100, 150] representing the discounted prices after applying the discount rate of 0.5 to the original prices of [100, 200, 300].
