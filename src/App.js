import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import DashBoard from './Components/DashBoard';
import Board from './Components/Board';

const loginPage = () => (<Login/>)
const homePage = () => (<HomePage/>)
const dashboard = () => (<DashBoard/>)
const board = () => (<Board/>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={homePage}/>  
        <Route exact path="/login" component={loginPage}/>
        <Route exact path="/dashboard" component={dashboard}/>
        <Route exact path="/board" component={Board}/>
      </div>
    );
  }
}

export default App;
