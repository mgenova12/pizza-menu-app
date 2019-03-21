import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

	const styles = {
	  avatar: {
	    margin: 40,
	    width: 200,
	    height: 200,
	    border: 'thin solid black',
	  },
	  description: {
	  	width: '70%',
	  	backgroundColor: '#fffff4',
	  	padding: 10,
	  	borderRadius: 5,
	  	border: 'thin solid black'
	  }
	};

export class PizzaDescription extends Component {

  render() {
  	const { classes } = this.props;
    return (
			<Grow in={true}>
	      <div>	
						<Typography variant="h2" align="center">{this.props.pizza.name}</Typography>
						<Grid container justify="center">
							<Avatar src={this.props.pizza.image} className={classes.avatar} />	
						</Grid>
						<Grid container justify="center">
							<div className={classes.description}>
								<Typography variant="h5">{this.props.pizza.description}</Typography>
							</div>
						</Grid>
	      </div>
			</Grow>
    );
  }
}

PizzaDescription.propTypes = {
	classes: PropTypes.object.isRequired,
  pizza: PropTypes.object.isRequired
};

export default withStyles(styles)(PizzaDescription);
