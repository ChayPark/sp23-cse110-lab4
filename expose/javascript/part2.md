## Part 2
Question 1: [What will happen at line 12 and why? If the code causes an error, explain why.]<br><br>
At line 12, the console will print the value of the variable i, which is the index of the last element in the prices array that was processed in the for loop. Since the for loop processes all elements in the prices array, the value of i will be equal to the length of the array, which is 3 in this case.
Therefore, when the code is executed, the console will print the value 3. This code will not cause an error, and the output will be:<br>
3<br>
[50, 100, 150]<br><br>
Question 2: [What will happen at line 13 and why? If the code causes an error, explain why.]<br><br>
On the first iteration of the loop, discountedPrice will be 50, since prices[0] is 100 and the discount is 0.5. On the second iteration, it will be 100, and on the third iteration it will be 150.
After the loop completes, the last value of discountedPrice will be 150, which is what will be logged at line 13.
The code will then return the discounted array, which will contain the final discounted prices for each item in the prices array. For the input [100, 200, 300] and a discount of 0.5, the discounted array will be [50, 100, 150].<br><br>
Question 3: [What will happen at line 14 and why? If the code causes an error, explain why.]<br><br>
At line 14, the finalPrice variable will be logged to the console for each iteration of the for loop. 
Since the variable is declared inside the loop, it will be re-assigned a new value for each iteration, and only the final value will be logged to the console when the loop ends. 
Therefore, the console will output the final discounted price of the last item in the prices array (which is 150 in this case) after rounding to two decimal places. 
There won't be any error.<br><br>
Question 4: [What will this function return? Give a brief explanation why. If the code causes an error, explain why.]<br><br>
This function will give you an array of discounted prices that are rounded. The array will have the values [50, 100, 150]. During each iteration of the loop, the discounted final price is added to the array.<br><br>
Question 5: [What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).]<br><br>
At line 12, the function will throw a ReferenceError because the variable i is declared with the let keyword inside the for loop and is therefore only accessible within the loop's block scope.
Since the console.log(i) statement is outside of the loop block, i is not defined and will result in an error. However, this will not affect the returned value of the function, which will still be the array [50, 100, 150] representing the discounted prices after applying the discount rate of 0.5 to the original prices of [100, 200, 300].<br><br>
Question 6: [What will happen at line 13 and why? If the code causes an error, explain why.]<br><br>
At line 13, the function will throw a ReferenceError because the variable discountedPrice is declared with the let keyword inside the for loop and is therefore only accessible within the loop's block scope.Since the console.log(discountedPrice) statement is outside of the loop block, discountedPrice is not defined and will result in an error. 
However, the console.log(discountedPrice) statement will not affect the returned value of the function, which will still be the array [50, 100, 150] representing the discounted prices after applying the discount rate of 0.5 to the original prices of [100, 200, 300].<br><br>
Question 7: [What will happen at line 14 and why? If the code causes an error, explain why.]<br><br>
At line 14, the function will output the last finalPrice value that was calculated in the for loop, which in this case is 150. This is because finalPrice is declared outside of the loop block and is therefore accessible outside of the loop. However, this console.log(finalPrice) statement will not affect the returned value of the function, which will still be the array [50, 100, 150] representing the discounted prices after applying the discount rate of 0.5 to the original prices of [100, 200, 300].<br><br>
Question 8: [What will this function return? Give a brief explanation. If the code causes an error, explain why.]<br><br>
The discountPrices function, when called with the arguments [100, 200, 300] and 0.5, will return the array [50, 100, 150].This is because the function takes two parameters, an array of prices and a discount value as a decimal. The for loop iterates through each element of the prices array, calculates the discounted price by multiplying the original price by (1 - discount), rounds the result to two decimal places using Math.round(), and adds the final discounted price to the discounted array using the push() method. Finally, the function returns the discounted array.
In this case, for the prices [100, 200, 300] and a discount rate of 0.5, the discounted prices will be [50, 100, 150], which will be returned by the function. There is no error in the function.<br><br>
Question 9: [What will happen at line 11 and why? If the code causes an error, explain why.]<br><br>
At line 11, an error will occur because i is not defined outside of the for loop. The variable i is declared with the let keyword inside the loop and is only accessible within the loop's block scope. Therefore, trying to access it outside of the loop will result in a ReferenceError saying that i is not defined.<br><br>
Question 10: [What will happen at line 12 and why? If the code causes an error, explain why.]<br><br>
At line 12, the console will log the value of the length variable which is equal to the length of the prices array passed as the first argument to the discountPrices function. In this case, the length of the array is 3. The code will not cause any errors as the length variable is defined correctly and accessible within the function scope.<br><br>
Question 11: [What will this function return? Give a brief explanation. If the code causes an error, explain why.]<br><br>The function will return an array containing the discounted prices of the products provided in the prices array, so [50, 100, 150]. The function calculates the discounted price of each product using the discount percentage provided as the discount parameter and adds it to a new discounted array. It then returns this array. There are no errors in the code.<br><br>
Question 12: [Given the above Object, write the notation for:]<br><br>
A.student['Grad Year']<br>
B.student['Grad Year']<br>
C.student.greeting()<br>
D.student['Favorite Teacher'].name<br>
E.student.courseLoad[0]<br>
<br><br>
Question 13: [Arithmetic]<br><br>
A. '32' - The plus operator concatenates the string '3' with the number 2, resulting in the string '32'.<br>
B. 1 - The minus operator subtracts the number 2 from the string '3', resulting in the number 1.<br>
C. 3 - The null value is converted to 0 in numeric contexts, so 3 + 0 results in 3.<br>
D. '3null' - The plus operator concatenates the string '3' with the string representation of null, which is 'null'.<br>
E. 4 - The boolean value true is converted to 1 in numeric contexts, so 1 + 3 results in 4.<br>
F. 0 - The boolean value false is converted to 0 in numeric contexts, and null is converted to 0 as well. Adding 0 to 0 results in 0, which is Not a Number (NaN) when converted to a number.<br>
G. '3undefined' - The plus operator concatenates the string '3' with the string representation of undefined, which is 'undefined'.<br>
H. NaN - The minus operator cannot subtract undefined from the string '3', so it results in NaN.<br><br>
Question 14: [Comparison]<br><br>
A. '2' > 1 // true. The string '2' is converted to the number 2 and compared to the number 1. 2 is greater than 1.<br>
B. '2' < '12' // false. When comparing strings, the comparison is done character by character from left to right. Since '2' is greater than '1' (the first character of '12'), '2' is also greater than '12'.<br>
C. 2 == '2' // true. The double equals operator performs type coercion, converting one of the operands to match the other. In this case, the string '2' is converted to the number 2, which is then equal to 2.<br>
D. 2 === '2' // false. The triple equals operator does not perform type coercion, so the comparison is between a number and a string, which are not the same type.<br>
E. true == 2 // false. It is comparing the boolean value true(which is equal to 1) to the integer value 2. Since they are not equal, the expression evaluates to false.<br>
F. true === Boolean(2) //true because Boolean(2) returns true since any non-zero number in JavaScript is considered a truthy value.<br><br>
Question 15: [Explain the difference between the == and === operators.]<br><br>
The == operator compares only the values while ignoring their data types, while the === operator compares both the values and data types.
<br><br>
Question 16: [Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.](https://github.com/ChayPark/sp23-cse110-lab4/blob/main/expose/javascript/part2-question16.js)<br><br>
Question 17: [If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.]<br><br>
We first declare a function named doSomething that takes a number as input and returns that number multiplied by 2.
We then call modifyArray with an array [1, 2, 3] and the doSomething function as the callback.
In modifyArray, we create an empty array named newArr and loop through the input array using a for loop.
For each element in the input array, we call the callback function with the element as input and push the result into the newArr array.
After looping through all the elements in the input array, we return the newArr array.
Since doSomething multiplies its input by 2, calling modifyArray with the doSomething callback function will double each element in the input array [1, 2, 3], resulting in the output array [2, 4, 6].<br><br>
Question 18: [The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.](https://github.com/ChayPark/sp23-cse110-lab4/blob/main/expose/javascript/part2-question18.js)<br><br>
Question 19: [What is the output of the above code?]<br><br>When printNums() function is called, it first prints 1 to the console, then schedules a setTimeout function to print 2 after 1000ms (1 second), and schedules another setTimeout function to print 3 after 0ms (immediately). 
Finally, it prints 4 to the console.
Therefore, the output will be 1 4 3 2.<br><br>
