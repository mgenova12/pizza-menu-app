import React, { Component } from 'react';
import PizzaCard from './PizzaCard'

const Pizzas = [
	{name: "Cheese Pizza", description: "cheese"},
	{name: "Peperoni Pizza", description: "pep"},
	{name: "Double Mushroom Pizza", description: "mush"},
	{name: "Grilled Veggie Pizza", description: "veg"},
	{name: "Hawaiian Pizza", description: "hawaii"},
]

class PizzaTable extends Component {
  render() {
    return (
      <div>
      	{Pizzas.map(pizza => 
      		<PizzaCard name={pizza.name} description={pizza.description}/>
      	)}

      </div>
    );
  }
}

export default PizzaTable;