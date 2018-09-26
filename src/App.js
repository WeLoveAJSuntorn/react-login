import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs';
import Board from './Components/Board';

const loginPage = () => (<Login/>)
const homePage = () => (<HomePage/>)
const about = () => (<AboutUs/>)
const board = () => (<Board/>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={homePage}/>  
        <Route exact path="/login" component={loginPage}/>
        <Route exact path="/aboutus" component={about}/>
        <Route exact path="/board" component={board}/>
      </div>
    );
  }
}

export default App;
