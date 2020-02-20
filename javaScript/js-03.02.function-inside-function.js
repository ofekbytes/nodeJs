
//global scope
var fName = 'Jron';
var age = 43;

//call function
fnunctionFirst();

// function inside function
function fnunctionFirst()  {
    fName = "shalom";
    var age = 36;

    function functionTwo() {
        var name = "yifat";
        age = 37;
    }

    
    //call the function
    functionTwo();

    //print fName;
    console.log(fName);

    //print age
    console.log(age);

}




