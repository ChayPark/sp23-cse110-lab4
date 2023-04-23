for (let property in statistics) {
  if (property.startsWith('r') || statistics[property] % 2 !== 0) {
    console.log(statistics[property]);
  }
}
This loop iterates through each property in the statistics object using the for...in loop syntax. 
For each property, it checks if the property name starts with the letter "r" using the startsWith() method. 
If the property name does start with "r", it prints out the value of that property using console.log(). 
If the property name does not start with "r", it checks if the value of that property is an odd number using the modulo operator (%). 
If the value is odd, it prints out the value of that property using console.log().
