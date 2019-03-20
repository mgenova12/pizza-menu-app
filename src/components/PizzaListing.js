import React, { Component } from 'react';
import PizzaTable from './PizzaTable'

import Typography from '@material-ui/core/Typography';

export class PizzaListing extends Component {

  render() {
    return (
      <div>

		<Typography variant="h2" align="center">Choose Your Favorite Pizza</Typography>

      	<PizzaTable/>

      </div>
    );
  }
}

export default PizzaListing;