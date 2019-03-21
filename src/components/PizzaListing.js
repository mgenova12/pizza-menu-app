import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import PizzaCard from './PizzaCard'

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';


class PizzaListing extends Component {

  render() {
    return (
        <div>
          <Typography variant="h2" align="center">Choose Your Favorite Pizza</Typography>

          <Grid container spacing={24} justify="center" >
          	{this.props.pizzas.map(pizza => 
              <Grow key={pizza.id} in={true}>
                <Grid item xs={6} sm={3}>

                  <Link to={`/${pizza.id}`} style={{ textDecoration: 'none' }}>          
                		<PizzaCard
                      pizza={pizza}
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

PizzaListing.propTypes = {
  pizzas: PropTypes.array.isRequired,
};

export default PizzaListing;
