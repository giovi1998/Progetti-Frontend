import React, { useState } from 'react';



const UseStateBasics = () => {
  let [title,setName]=useState("RandomTitle");

  const handleClick = () => {
    if(title === "RandomTitle"){ //Uguale uguale altrimenti non funziona!
      setName("Ciao");
    }else{
      setName("RandomTitle");
    }
  }

  return (<React.Fragment>
  <h2>{title}</h2>
  <button onClick={handleClick}>
    Clicami!
  </button>
  </React.Fragment>);
};

export default UseStateBasics;
