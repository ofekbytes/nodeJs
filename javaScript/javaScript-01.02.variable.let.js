
//global scope
let fName = 'Jron';
let age = 45;
let haveBusTicket = true;

const pi="3.14159265359"

console.log('My Name is ' + fName);

// function call with paraments
console.log(fnPrintUserInformation(fName, age, haveBusTicket));

// function with argument (local scope) and return value
function fnPrintUserInformation(name, age, busTicket) 
{
    //local scope
    return "Name is " + name + ", Age is " + age + ", busTickets" + busTicket;
}