import React from 'react';
const Pet = props => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h1", {}, props.status),
  //   React.createElement("h1", {}, props.college)
  // ]);
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      <h2>{props.college}</h2>
    </div>
  )
};
export default Pet;
