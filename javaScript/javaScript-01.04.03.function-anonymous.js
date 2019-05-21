
//global scope
let fName = 'Jron';
let age = 43;
let haveBusTicket = true;

age=45;

// new code //
// function with "this" keyboard -and- Arrow Functions handling
const fnPrintUserInformation = (name, age, busTicket) =>
{
    console.log("Name is " + this.fName);
    return "Name is " + name + ", Age is " + age + ", busTickets" + busTicket;
}


console.log(fnPrintUserInformation(fName, age, haveBusTicket));

