import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  componentDidMount()
  {
    const promise=petfinder.breed.list({animal:"dog"});

    promise.then(console.log,console.error)
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!!!</h1>
        <Pet
          name="Aman Sharma"
          status="Second Year"
          college="Maharaja Agrasen Institute Of Technology"
        />
        <Pet
          name="Pulkit Gupta"
          status="Third Year"
          college="Maharaha Surajmal Institute Of Technology"
        />
        <Pet
          name="Rohan Garg"
          status="Fourth Year"
          college="Bhagwan Pashuram Institute Of Technology"
        />
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
