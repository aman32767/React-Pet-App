import React from 'react';
const Pet = props => {

  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      <h2>{props.college}</h2>
    </div>
  )
};
export default Pet;
