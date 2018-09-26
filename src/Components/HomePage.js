import React, { Component } from 'react';
import './homepage.css';

class App extends Component {
  render() {
    return (
      <div className="homepage">
      <div className="container">
        <div className="col s3"></div>
          <div className="col s3 panel card-panel">
            <h1>Hello!</h1>
            <h5 className="center">Welcome to We Love AJ Suntorn</h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a className="green btn" href = "/login">Go to Log in</a>
            <br></br>
            <br></br>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
