//
// object - key:value pairs
// 
const person = {
    name: 'jron',
    age: 45,
};

console.log(person);


//
// object with anonymous function with arrow function
//
const personWithFunctionBug1 = {
    name:'shalom',
    age: 22,
    //anonymous function with arrow function

    greet: () => {
        console.log('hello ' + this.name + ' ,how are you today ? '); 
        // -!- this refers to surrounding object (personWithFunction)
        // -!- error message: 
        //     "hello undefined ,how are you today ? "
        // -!- this is not refer to "personWithFunction"
    }
};

//call function within an object
personWithFunctionBug1.greet();



// example
const personWithFunctionFixBog = {
    name:'shalom',
    age: 22,
    greet: function() {
        console.log('hello ' + this.name + ' ,how are you today ? '); 
    }
};

personWithFunctionFixBog.greet();


//comment this file