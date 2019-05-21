

// example #1.
// short function writing into const variable/
const add = (a,b) => {
    return a + b;
};


// example #2.
// shorter function then example #1
const adding = (a,b) => a + b;


// example #3.
// shorter function (+1)
const addpo = (a) => a + 1;


// example #4 - 
// one argument do not need Parenthesis/bracket (example $)
// shorter function (+1)
const addpo2 = a => a + 1;

// example #5 - 
// shorter function without argument/s
const addpo3 = () => 21 + 39;




let userMessage = (message) => {
    return message;
};


const num1 = 3, num2 = 6;

console.log(num1 + " + " + num2 + " = " + add(num1 , num2) ); // 2x argument
console.log(num1 + " + " + num2 + " = " + adding(num1 , num2) ); // 2x argument
console.log(num1 + " + " + 1 + " = " + addpo(num1) ); // 1x argument
console.log(num2 + " + " + 1 + " = " + addpo2(num2) ); // 1x argument
console.log("function return the number " + addpo3() ) ; // no argument

console.log(userMessage("this is nice"));

