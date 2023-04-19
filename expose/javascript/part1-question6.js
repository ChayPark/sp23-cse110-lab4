At line 13, an error will occur because discountedPrice is declared inside the for loop using let, which means it has block scope and can only be accessed within the block it was declared in. 
Since the console.log() statement is outside the block, it cannot access the discountedPrice variable and will result in a ReferenceError.
