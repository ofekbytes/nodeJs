//
// Spread Operators
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


var person = {
    name: 'jron',
    age: 45,
    welcome() { 
        console.log('welcome ' + name + ' have a nice day');
    },
    food: ['apple', 'orange', 'pear'],
  };

var copyArrayObject = {...person};

console.log(person);
console.log(copyArrayObject);

