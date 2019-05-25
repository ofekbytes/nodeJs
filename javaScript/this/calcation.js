// 
// JavaScript ES-6
// "this" keyword -and- function reference
//

// temp-list: https://academind.com/learn/javascript/this-keyword-function-references/

//instance gen to NameGererator()
const gen = new NameGenerator(); //object = new instance


class NameField() {
    constructor(name)
    {
        const field = document.createElement('li'); //field item
        field.textContent = name; //text fo field item + argument from the constructor

        const nameListHook = doucment.querySelector('#names'); //reference to unorder-list with id="name"
        nameListHook.appendChild(field); //ading the name to list.
    }
}

// class for the object
class NameGenerator {
    //constructor
    constructor() {
        //refernece to a "button"
        const btn = document.querySelector('button');
        //event listener with "click" event.
        btn.addEventListener('click',???); //when 'click' do somthing
    }

    //function/method in the class
    addName() {
        //instance "name" to NameField()
        const name = new NameField("Test");  //object = new instance
    }
}
