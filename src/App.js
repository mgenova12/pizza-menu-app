import React, { Component } from 'react';

import PizzaListing from './components/PizzaListing'

import './App.css';

class App extends Component {
  render() {
    return (
    	<div> 
	      <div className="App">
	        <PizzaListing/>
	      </div>
      </div>
    );
  }
}

export default App;
