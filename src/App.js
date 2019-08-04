import React from 'react';
import { render } from 'react-dom';
import pet from './pet';
class App extends React.Component {
  handelHeadingClick() {
    alert("ouuchhhh!!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handelHeadingClick },
        "Adopted"
      ),
      React.createElement(pet, {
        name: "Aman",
        status: "1 backlog",
        college: "Mait"
      }),
      React.createElement(pet, {
        name: "rohan",
        status: "harami",
        college: "mau"
      }),
      React.createElement(pet, {
        name: "pulkit",
        status: "4th",
        college: "msit"
      })
    ]);
  }
}
render(React.createElement(App), document.getElementById("root"));
