//
// Spread & Rest Operators
// 


//
//1. slice() method
//
const food = ['apple', 'orange', 'peach', 'lemon', 'tomato'];

console.log(food);
console.log("food list: " + food);

// copy array - "slice() method ".
var cpArray = food.slice();
console.log('cpArray: ' + cpArray);

//
//2. slice() method
//
//var food = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(' ');
console.log('2. copy all food array');
console.log(food.slice());

console.log(' from array cell 2 till the end of the array ');
console.log(food.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(' from array cell 2 till cell 4 ');
console.log(food.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(' from array cell 1 till cell 5 ');
console.log(food.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
