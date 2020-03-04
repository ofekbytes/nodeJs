
//global scope
var fName = 'Jron';
var age = 43;

//call function
fnunctionFirst();

// function inside function

/*
* External function
*/
function fnunctionFirst()  {
    fName = "shalom";
    var fage = 36;
    name = 'assign internal function variable <name> with this value';
    /*
    * Internal function
    */
    function functionTwo() {
        var name = "yifat";
        age = 37;
        fage=11;

    }
  
    //call Internal function
    functionTwo();

    //print fName;
    console.log('fname ::' + fName);

    //print age
    console.log('age :: ' + age);

    console.log('fage :: ' + fage);

    age = fage;
    console.log('fage = age :: ' + age);

    console.log('name :: ' + name);
}




