
//global scope
var fName = 'Jron';
var age = 45;
var haveBusTicket = true;

console.log('My Name is ' + fName);

// function call with paraments
console.log(fnPrintUserInformation(fName, age, haveBusTicket));

// function with argument (local scope) and return value
function fnPrintUserInformation(name, age, busTicket) {
    //local scope
    return "Name is " + name + ", Age is " + age + ", busTickets" + busTicket;
}

///output///
