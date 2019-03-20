import React, { Component } from 'react';
import PizzaCard from './PizzaCard'

import Cheese from '../imgs/cheese-pizza.jpg'
import Pepperoni from '../imgs/pepperoni-pizza.jpg'
import DoubleMushroom from '../imgs/double-mushroom-pizza.jpg'
import GrilledVeggie from '../imgs/grilled-veggie-pizza.jpg'
import Hawaiian from '../imgs/hawaiian-pizza.jpg'

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

const Pizzas = [
	{name: "Cheese", description: "cheese", image: Cheese},
	{name: "Pepperoni", description: "pep", image: Pepperoni},
	{name: "Double Mushroom", description: "mush", image: DoubleMushroom},
	{name: "Grilled Veggie", description: "veg", image: GrilledVeggie},
	{name: "Hawaiian", description: "hawaii", image: Hawaiian},
]

class PizzaTable extends Component {
  render() {
    return (
      <div>
      <Grid container spacing={24}>
      	{Pizzas.map(pizza => 
          <Grow in={true}>
            <Grid item md={3}>
          		<PizzaCard 
                name={pizza.name} 
                description={pizza.description} 
                img={pizza.image}
              />
            </Grid>
          </Grow>
      	)}
      </Grid>
      </div>
    );
  }
}

export default PizzaTable;