The function will return an array of discounted prices for the input array of prices. Specifically, it will return the array [50, 100, 150], which represents a 50% discount applied to each of the original prices of [100, 200, 300], respectively.
The function works by iterating through the input array of prices and applying the discount to each price, then rounding the resulting discounted price to two decimal places using the Math.round() method. 
Finally, the discounted price is added to the discounted array using the push() method.
There is a minor error in the code, however. In the line var discountedPrice = price[i]*(1-discount);, the variable price should be prices, which is the name of the input array parameter. 
This typo could cause a ReferenceError when running the function, preventing it from executing correctly.
