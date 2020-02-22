
//global scope
var index = 1;

//loop - run for every iteration of the for() loop (not waiting and running)
for (index=0; index<3; index++) {
    // registers a callback for 1 second,
    // and then run the function 3 time, with the value 3 (after 1 second).
    setTimeout(function(){
        console.log(index);
    },1000);
}
