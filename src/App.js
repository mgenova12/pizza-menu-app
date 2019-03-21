import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import PizzaDescription from './components/PizzaDescription'
import PizzaListing from './components/PizzaListing'

import Cheese from './imgs/cheese-pizza.jpg'
import Pepperoni from './imgs/pepperoni-pizza.jpg'
import DoubleMushroom from './imgs/double-mushroom-pizza.jpg'
import GrilledVeggie from './imgs/grilled-veggie-pizza.jpg'
import Hawaiian from './imgs/hawaiian-pizza.jpg'

const Pizzas = [
	{id: 1, name: "Cheese", description: "Cheese pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature, traditionally in a wood-fired oven.", image: Cheese},
	{id: 2, name: "Pepperoni", description: "Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper. ... Thinly sliced pepperoni is a popular pizza topping in American-style pizzerias and is used as filling in the West Virginia pepperoni roll.", image: Pepperoni},
	{id: 3, name: "Double Mushroom", description: "Cremini and portobellos are actually the same mushroom; portobellos are the mature form. Marry them with a whole-wheat crust for a pizza with earthy, nutty flavor.", image: DoubleMushroom},
	{id: 4, name: "Grilled Veggie", description: "By skipping the sodium-laden meats, we pack a full serving of vegetables into each square, thereby doubling the fiber of most pizza chain offerings. Still every bit as satisfying as its meaty counterparts, our pie will delight even the most devout of carnivores. The dough develops a focaccia-like texture from a 24-hour resting period in the refrigerator.", image: GrilledVeggie},
	{id: 5, name: "Hawaiian", description: "Hawaiian pizza is the most underrated pizza on the planet. Combining pineapple, cheese, and ham, Hawaiian pizza is sweet, salty, and cheesy all in 1 bite.", image: Hawaiian},
]

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Route exact path="/" render={() => (
            <PizzaListing pizzas={Pizzas}/>
          )}/>  	      	
          
          <Route path="/:id" render={(props) => (
            <PizzaDescription pizza={Pizzas.find(pizza => pizza.id === parseInt(props.match.params.id))}/>
          )}/>  	      	
	      </div>
      </Router>
    );
  }
}

export default App;
