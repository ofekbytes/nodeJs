

// example #1.
// short function writing into const variable
// add(2,3) return 5
const add = (a,b) => {
    return a + b;
};


// example #2.
// shorter function then example #1: without the "return" keyword
// add(2,3) return 5
const adding = (a,b) => a + b;


// example #3. arrow array with one argument
// shorter function (+1):
const addpo = (a) => a + 1;


// example #4 - arrow array
// one argument do not need Parenthesis/bracket (example $)
// shorter function (+1), without curly brackets
const addpo2 = a => a + 1;


// example #5 - arrow function without argument -
// shorter function without any argument/s (return a calc function data)
// return 21 + 39 , return value of  60 
const addpo3 = () => 21 + 39;


//return a message
let userMessage = (message) => {
    return message;
};


//recive a 
let newMsg = userMsg => ".. test .. " + userMsg;


const num1 = 3, num2 = 6;

console.log(num1 + " + " + num2 + " = " + add(num1 , num2) ); // 2x argument
console.log(num1 + " + " + num2 + " = " + adding(num1 , num2) ); // 2x argument
console.log(num1 + " + " + 1 + " = " + addpo(num1) ); // 1x argument
console.log(num2 + " + " + 1 + " = " + addpo2(num2) ); // 1x argument
console.log("function return the number " + addpo3() ) ; // no argument

console.log(userMessage("this is nice"));
console.log(newMsg("this nice arrow function with argument "));

