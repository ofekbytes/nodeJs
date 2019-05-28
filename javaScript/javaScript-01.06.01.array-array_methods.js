//
// array array-methods
// 
const person = {
    name: 'jron',
    age: 45,
};

console.log(person);

// output:
// { name: 'jron', age: 45 }

//array - string, string, numbers, boolean(true/false), object{}, other array
const arrayTypesInJavaScipt = 
['string1', 'string2', 1, true, { name: 'shalom', age: 33 }, ['anthoer array', 33]]; 

console.log(
              "  String[0] == " + arrayTypesInJavaScipt[0] 
            + " ,String[1] == " + arrayTypesInJavaScipt[1]
            + " ,number[2] ==  " + arrayTypesInJavaScipt[2]
            + " ,boolean[3] == " + arrayTypesInJavaScipt[3]
            + " ,array[4].name == " + arrayTypesInJavaScipt[4].name
            + " ,array[4].age == " + arrayTypesInJavaScipt[4].age
            + " ,array[5]-in-Array == " + arrayTypesInJavaScipt[5]
            + " ,array[5][0] == " + arrayTypesInJavaScipt[5][0]
            + " ,array[5][1] == " + arrayTypesInJavaScipt[5][1]
            + " "
            );