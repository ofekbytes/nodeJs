//
// primitive -vs- Reference Types 
// 


//
// primitive
//

var name1 = 'name1'
console.log('name1 ==> ' + name1);

var name2 = 'name2';
console.log('name2 ==> ' + name2);

var name1 = 'new-name';
console.log('name2 ==> ' + name2);
console.log('name1 ==> ' + name1);


//
// Reference Types 
//

var person1 = {
    name: 'jron',
    age: 45,
  };

console.log('person1 ==> ');
console.log(person1);

// person2 --> point to --> person1 address
var person2 = person1;
console.log('person2 ==> pointer to ==> person1 ');
console.log('person1 ==> ');
console.log(person2);

person1.name = 'yifat';
console.log('person1 ==> person1.name ==> yifat');
console.log('person2 ==> ');
console.log(person2);

var person3 = {
    name: 'shalom',
    age: 37,
  };

console.log('person3 (new object) ==> ');
console.log(person3);

//create a new object and copy exist onbject into it
var person4 = Object.assign({},person3);
console.log('person4 (new object) copied from person3 object ==> ');
console.log('person4 ==> ')
console.log(person4);

var person5 = Object.assign(person1,person5);
console.log('person5 copied from person1');
console.log('person5 ==> ');
console.log(person5);

