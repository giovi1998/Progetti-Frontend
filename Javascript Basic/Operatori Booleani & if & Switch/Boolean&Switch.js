/*
Logical operators
|| (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 

*/

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

//Precedence of AND && is higher than OR ||

//A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

let num = 2 + 2;

switch (num) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//If there is no break then the execution continues with the next case without any checks.
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );

/*
case 3: // (*) grouped two cases
case 5:
  alert('Wrong!');
  alert("Why don't you take a math class?");
  break;

  */

