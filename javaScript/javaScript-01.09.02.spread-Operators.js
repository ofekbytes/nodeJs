//
// Spread & Rest Operators
// 


//
//1.
//
const food = ['apple', 'orange', 'peach'];

// console.log(contact);
// console.log(contact.welcome());

console.log(food);

// copy array
var cpArray = [food];
console.log("array(Reference type), inside array. ")
console.log(cpArray);


// bug - array, inside array //
//
// [ 'apple', 'orange', 'peach' ]
// array, inside array. 
// [ [ 'apple', 'orange', 'peach' ] ]

//
// spread operator //
//
var cpArraySpreadOperator = [...food];

console.log('spread Operator new array/object = [...food] ') ;
console.log(cpArraySpreadOperator);


// TODO: '+' / '-' example //