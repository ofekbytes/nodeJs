//
// object - key:value pairs
// 
const person = {
    name: 'jron',
    age: 45,
};

console.log(person);

// output:
// { name: 'jron', age: 45 }


//------------------------------------------------------------------------//
// "arrow" function ("=>") - 
// object with anonymous function with arrow function
//

const personWithFunctionBug1 = {
    name: 'shalom',
    age: 22,
    //anonymous function with "arrow" function
    greet: () => {
        console.log('hello ' + this.name + ' ,how are you today ? ');
        // -!- 
        // "personWithFunctionBug1" object contain:
        // "this" is not refer to the global scope, 
        // "this" refer to the global node runtime scope.
        // and not to the object "personWithFunctionBug1".
    }
};

//call function within an object
personWithFunctionBug1.greet();

// output:
// "hello undefined ,how are you today ? "


//------------------------------------------------------------------------//
// function () -
// fixing the bug - ("Arrow" Function)
// function instead of "arrow" function

const personWithFunctionFixBog = {
    name: 'shalom',
    age: 22,
    greet: function () {
        console.log('hello ' + this.name + ' ,how are you today ? ');
    }
};

personWithFunctionFixBog.greet();

// output: 
// hello shalom ,how are you today ?


//------------------------------------------------------------------------//
// function () -
// using function without function keyword.

const personWithFunctionMethod = {
    name: 'shalom',
    age: 22,
    greet() {
        console.log('hello ' + this.name + ' ,without function/method keyword ? ');
    }
};

personWithFunctionMethod.greet();

// output:
// hello shalom ,without function/method keyword ? 


