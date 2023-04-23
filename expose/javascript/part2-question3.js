A. '2' > 1 // true. The string '2' is converted to the number 2 and compared to the number 1. 2 is greater than 1.
B. '2' < '12' // false. When comparing strings, the comparison is done character by character from left to right. Since '2' is greater than '1' (the first character of '12'), '2' is also greater than '12'.
C. 2 == '2' // true. The double equals operator performs type coercion, converting one of the operands to match the other. In this case, the string '2' is converted to the number 2, which is then equal to 2.
D. 2 === '2' // false. The triple equals operator does not perform type coercion, so the comparison is between a number and a string, which are not the same type.
E. true == 2 // true. The boolean value true is coerced to the number 1, which is then equal to 2.
F. true === Boolean(2) // false. The Boolean function returns a boolean value based on the truthiness of its argument. In this case, the argument is the number 2, which is truthy. However, the triple equals operator checks for strict equality, which means the types must also match. Since true is a boolean and Boolean(2) is an object, the comparison is false.
