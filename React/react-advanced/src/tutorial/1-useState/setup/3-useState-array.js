import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople]= React.useState(data);

  let peopleAsString = people.map(person => person.name).join(', ')
  console.log(peopleAsString);
  return (
  <React.Fragment>
    <h2>{peopleAsString}</h2>
    <button onClick={() =>setPeople([])}>
    Clear All
    </button>
  </React.Fragment>
  );
};

export default UseStateArray;
