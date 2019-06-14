//
// Rest Operators
// 

const addArgumentToArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
}

console.log('return and print the new array ');
console.log(addArgumentToArray(1,2,3));

// output //
// return and print the new array 
// [ 1, 2, 3 ]


console.log('javaScript allow to send 4 arguments into 3 function, no error occurs ')
console.log(addArgumentToArray(1,2,3,4));

// javaScript allow to send 4 arguments into 3 function, no error occurs 
// [ 1, 2, 3 ]


// rest operator //
const addArgumentToArrayWithRestOperator = (...args) => {
  return args;
}

console.log('call function with argument')
console.log(addArgumentToArrayWithRestOperator(1,2,3,4,5) );

// output //
// call function with argument
// [ 1, 2, 3, 4, 5 ]



