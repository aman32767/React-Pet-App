import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
// import Pet from "./Pet";
const petfinder = pf({
  key: process.env.CLIENT_ID,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state={
      pets:[]
    };
  }
  componentDidMount()
  {
      petfinder.pet.find({output:"full" , location:"Seattle, WA"})
      .then(data=>{
        let pets;
        if(data.petfinder.pets && data.petfinder.pets.pet)
        {
           if(Array.isArray(data.petfinder.pets.pet))
           {
             pets=data.petfinder.pets.pet;
           }else{
             pets=[data.petfinder.pets.pet];
           }
        }else{
          pets=[];
        }
        this.state({
          pets
        })
      })
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!!!</h1>
        <pre><code>
         {JSON.stringify(this.state,null,4) } 
        </code></pre>
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
