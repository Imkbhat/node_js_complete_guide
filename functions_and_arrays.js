const Person = {
    name:'Kiran',
    age : 29,
    greet(){
        console.log("Hello "+this.name +" your age"+this.age);
    }
};

console.log(Person.greet());

=========================================================================

let hobbies = ['Coding', 'Cricket'];

for(let hobby of hobbies) {
    console.log(hobby);
}
