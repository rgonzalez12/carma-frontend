import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NewCar from './containers/NewCar'
import Cars from './containers/Cars'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="primary-container">
           <Switch>
             <Route exact path="/" component={ HomePage } />
             <Route exact path="/cars" component={ Cars } />
             <Route exact path="/cars/new" component={ NewCar } />
           </Switch>
           
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App;