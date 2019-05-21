
//global scope
let fName = 'Jron';
let age = 43;
let haveBusTicket = true;

age=45;

// function with argument
function fnPrintUserInformation(name, age, busTicket) 
{
    return "Name is " + name + ", Age is " + age + ", busTickets" + busTicket;
}

console.log(fnPrintUserInformation(fName, age, haveBusTicket));

