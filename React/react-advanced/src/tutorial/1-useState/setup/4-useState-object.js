import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'Gio',
    age:24,
    message : 'Ciao'
 });
 const changeMessage = () =>{
  setPerson({...person,message: "Ciao Amici"});
 }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>
        Cambia Messaggio
      </button>
    </>
  );

};

export default UseStateObject;
