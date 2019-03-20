import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

export class PizzaDescription extends Component {

  render() {
    return (
      <div>	
		<Typography variant="h2" align="center">{this.props.pizza.name}</Typography>
		
      </div>
    );
  }
}

export default PizzaDescription;