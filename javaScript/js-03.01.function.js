
//global scope
let fName = 'Jron';
let age = 43;
let haveBusTicket = true;

age = 45;

// function with argument
function fnPrintUserInformation(name, age, busTicket)  {
    //local scope / local variable
    return "Name: " + name 
            + ", Age: " + age 
            + ", busTickets: " + busTicket;
}

console.log(fnPrintUserInformation(fName, age, haveBusTicket)); //calling function with parameters


