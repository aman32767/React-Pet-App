import React from 'react';
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.status),
    React.createElement("h1", {}, props.college)
  ]);
};
export default Pet;
