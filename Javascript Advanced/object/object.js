//create user
let user={
    name:"Gio",
    surname: "Cidu",
}
//uguale
console.log(user.name);
console.log(user['name']);
/*
function User(name,surname){
    this.name=name;
    this.surname=surname;
}*/

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    sayHi = function(){
        alert("Ciao sono "+ this.name);
    }
}

//User can also be created in this way
let user2 = new User("Fili","Cidu");

console.log(user);
console.log(user2);

//change name

user.name="Peter";
console.log(user);
//delete variable username
delete user.name;
console.log(user);

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user2) {
  clone[key] = user2[key];
}

console.log(clone);

user2.sayHi();