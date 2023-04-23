At line 11, an error will occur because i is not defined outside of the for loop. 
The variable i is declared with the let keyword inside the loop and is only accessible within the loop's block scope. 
Therefore, trying to access it outside of the loop will result in a ReferenceError saying that i is not defined.
