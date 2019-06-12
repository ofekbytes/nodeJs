//
// Arrays, Objects, Reference Types
// 

//
// const reference to reference type (pointer to heap)
//
const foods = ['pear', 'apple', 'orange'];

console.log(foods);
console.log("before push method ::: "  + foods);

//push() -  add new element to the existing array with a array method.
foods.push('banana');
foods.push('lemon','ice');

console.log(foods);
console.log("after push method ::: " + foods);

// output //
// before push method ::: pear,apple,orange
// after push method ::: pear,apple,orange,banana