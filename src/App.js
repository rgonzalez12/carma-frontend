import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage'
import NewCar from './containers/NewCar'
import Cars from './containers/Cars'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="primary-container">
          <NavBar />
           <Switch>
             <Route exact path="/" component={ HomePage } />
             <Route exact path="/cars" component={ Cars } />
             <Route exact path="/cars/new" component={ NewCar } />
           </Switch>
        </div>
      </Router>
    )
  }
}

export default App;