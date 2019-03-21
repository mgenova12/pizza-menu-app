import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PizzaCard from './PizzaCard'

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';


class PizzaListing extends Component {

  render() {
    return (
        <div>
          <Typography variant="h2" align="center">Choose Your Favorite Pizza</Typography>

          <Grid container spacing={24}>
          	{this.props.pizzas.map(pizza => 
              <Grow key={pizza.id} in={true}>
                <Grid item md={3}>

                  <Link to={`/${pizza.id}`} style={{ textDecoration: 'none' }}>          
                		<PizzaCard
                      id={pizza.id}
                      name={pizza.name} 
                      description={pizza.description} 
                      img={pizza.image}
                    />
                  </Link>

                </Grid>
              </Grow>
            )}
          </Grid>

        </div>
    );
  }
}

export default PizzaListing;