let name = 'Kiran';
let age = 29;
let hobby = 'Coding';

const summerizePerson = (pName, pAge, pHobby) => {
    return "Person Name is "+pName+" and age is "+pAge+", hobby is "+pHobby; 
}

const add = (a,b) => a + b;
const addOne = () => 2 + 1;


console.log(add(1,2));
console.log(addOne(2));

console.log(summerizePerson(name, age, hobby));
