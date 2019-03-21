import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  card: {
    maxWidth: 400,
    border: 'thin solid black',
    backgroundColor: '#fffff4',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class PizzaCard extends Component {
  state = { 
    expanded: false,
    favorited: false
  };

  handleExpandClick = (event) => {
    event.preventDefault()
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleFavoriteClick = (event) => {
    event.preventDefault()
    this.setState(state => ({ favorited: !state.favorited }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.pizza.name}
          />
            <CardMedia 
              className={classes.media}
              image={this.props.pizza.image}
              title={this.props.pizza.name}
            />

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton 
              aria-label="Add to favorites" 
              onClick={(e) => {this.handleFavoriteClick(e)}}
            >
              <FavoriteIcon style={{color: this.state.favorited ? 'red' : ''}} />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {this.handleExpandClick(e)}}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {this.props.pizza.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

PizzaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  pizza: PropTypes.object.isRequired
};

export default withStyles(styles)(PizzaCard);
