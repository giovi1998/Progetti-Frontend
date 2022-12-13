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
    constructor(value) {
        const parts= value.split(' ');
        this._name=parts[0];
        this._surname=parts[1];
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }
    get surname(){
        return this._surname;
    }
    set surname(value){
        this._surname=value;
    }
    sayHi = function(){
        alert("Ciao sono "+ this.name);
    }
}
// come si va ad aggiungere un user che è anche admin?

class Admin extends User{
    #IsAdmin='false'; //private proprieties
    /*
    #isPrivateFunction(){
        //code
    }
    */
    constructor(value){
        super(value);
        this.#IsAdmin=true;
    }
}

let admin1= new Admin("Sandro Gotta");
alert( admin1 instanceof Admin ); // true
alert( admin1 instanceof User ); // true
console.log(admin1);
//User can also be created in this way
let user2 = new User("Fili Cidu");
console.log(user2);
user2.fullname='Giacomo Fanni';
//console.log(user.fullname);
console.log(user2);
console.log(user2.name +' '+ user2.surname + " sono User con get e set");

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