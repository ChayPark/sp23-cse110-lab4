Line 12 (console.log(i);) will cause a reference error because i is declared inside the for loop block and is not accessible outside of it. 
If the function is called like the others with discountPrices([100, 200, 300], 0.5), the for loop will run three times, but i will only be accessible within the for loop's block scope. 
Therefore, the code will throw a reference error when it tries to access i outside of the for loop.
