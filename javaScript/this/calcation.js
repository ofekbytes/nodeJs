// 
// JavaScript ES-6
// "this" keyword -and- function reference
//

// temp-list: 
// https://www.youtube.com/watch?time_continue=526&v=Pv9flm-80vM
// https://academind.com/learn/javascript/this-keyword-function-references/


class NameField {
    constructor(name)
    {
        const field = document.createElement('li'); //field item
        field.textContent = name; //text fo field item + argument from the constructor
        const nameListHook = document.querySelector('#names'); //reference to unorder-list with id="name"
        nameListHook.appendChild(field); //ading the name to list.
    }
}

// class for the object
class NameGenerator {
    constructor() {
        //refernece to a "button"
        const btn = document.querySelector('button'); 
        //event listener with "click" event.

        // btn.addEventListener('click',addName); 
        //  -!- error message: addName is not defined 
        //  -!- fixed: "this." gives us access to object "NameGernerator", and then we can call method
        // btn.addEventListener('click',this.addName()); // method will be execute one on html/javascript load "addName()""
        btn.addEventListener('click', this.addName); // call a reference of the method "addName", now the event will work.

    }

    //function/method in the class (attached to the object)
    addName() {
        //instance "name" to NameField()
        const name = new NameField("jron");  //object = new instance
    }
}

//instance gen to NameGererator()
const gen = new NameGenerator(); //object = new instance