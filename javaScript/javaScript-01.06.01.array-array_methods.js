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
const arrayTypesInJavaScipt = ['string1', 'string2', 1, true, {
    name: 'shalom',
    age: 33
  },
  ['anthoer array', 33]
];

console.log(
  "  String[0] == " + arrayTypesInJavaScipt[0] +
  " ,String[1] == " + arrayTypesInJavaScipt[1] +
  " ,number[2] ==  " + arrayTypesInJavaScipt[2] +
  " ,boolean[3] == " + arrayTypesInJavaScipt[3] +
  " ,array[4].name == " + arrayTypesInJavaScipt[4].name +
  " ,array[4].age == " + arrayTypesInJavaScipt[4].age +
  " ,array[5]-in-Array == " + arrayTypesInJavaScipt[5] +
  " ,array[5][0] == " + arrayTypesInJavaScipt[5][0] +
  " ,array[5][1] == " + arrayTypesInJavaScipt[5][1] +
  " "
);
// output:
//
// { name: 'jron', age: 45 }
// String[0] == string1 ,String[1] == string2 ,number[2] ==  1 ,boolean[3] == true ,array[4].name == shalom ,array[4].age == 33 
// ,array[5]-in-Array == anthoer array,33 ,array[5][0] == anthoer array ,array[5][1] == 33 


// array - "for() - print array using for() "
const names = ['shalom', 'yifat'];
console.log("names list:")
for (let name of names) {
  console.log(name);
}

// output:
// names list:
// shalom
// yifat


// array method: "map()"
const foods = ['pear', 'apple', 'orange'];

// example 1: map()
// map() will return a new array.
console.log(foods.map(foods =>
  {
    return ' Foods:: ' + foods; 
  })); 

  
// example 2: map()
// map() will return a new array.
// function with one argument do not need curly brackets not "return" //
console.log(foods.map(foods =>  ' Foods:: ' + foods ));  


console.log(foods); // original array





