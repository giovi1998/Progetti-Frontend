
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
const myBirthday = '31.12.1998';

let admin, 
    name = 'John';

admin = name;

/*Data types

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.

And one non-primitive data type:
object for more complex data structures.

Numbers:
no error in let variables we can put what we want into "dynamically typed variables"*/
let number = "hello";
number = 9007199254740991; //allow also floats. Numeber goes from ±(2^53-1) if you want to save other number must use bigInt
const bigInt = 1234567890123456789012345678901234567890n //the "n" at the end means it's a BigInt

//Strings no char in JS
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//Boolean 
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1; //comparison is ok!

//Undefined values or null values
let age = null;
let age1;

alert (typeof true); // shows "boolean" 

alert(age1); // shows "undefined"

alert(admin)
alert($ + _); // 3
alert(myBirthday); 
console.log(9007199254740991 + 1); // 9007199254740992
console.log(bigInt); 
console.log(phrase + `${ str}!`);


