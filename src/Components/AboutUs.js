import React, { Component } from 'react';


const picture1 = require('./images/nutchasan.jpg');
const picture2 = require('./images/jakee.jpg');
const picture3 = require('./images/pun.jpg');

const padding = {
  padding: '5px',
};

const padding_profile ={
  padding: '20px 10px 10px 10px',
  width: '70%',
  borderRadius: '10px'
}

const fonts_size = {
  fontSize: '2em'
};
const padding_bottom = {
  paddingBottom: '50px',
  width: '65%',
  borderRadius: '10px'
};
const pic_size = {
  height: '200px',
  width: '200px'
}




export default class AboutUs extends Component {
  render() {
    return (
      <div className="App">
          <div className="row">
          <nav>
            <div className="nav-wrapper red lighten-2">
              <ul className="right hide-on-med-and-down">
                <li><a href="/board">Home</a></li>
              </ul>
            </div>
          </nav>
          </div>
          <div className="row">
            <div className="col s3">
              <div className="row">
                <h1>Team</h1>
              </div>
              <div className="row">
                <div className="col s12 teal lighten-3" style={padding}></div>
              </div>
            </div>
            <div className="cal s9"></div>
          </div>
          <div className="row">

            <div className="col s4">
              <div className="container red lighten-2 z-depth-3" style={padding_profile}>
                <div className="row">
                    <img className="circle responsive-img z-depth-3" alt='picture' src={String(picture1)} style={pic_size} />
                </div>
                <div className="row">
                  <div className="container white z-depth-3" style={padding_bottom}>
                    <p style={fonts_size}>Developer</p> 
                    <p>Nutchasan Jantarah</p>
                    <p>5910110095</p>
                    <p>Computer engineering</p>
                    <p>Prince of songkla university</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s4">
              <div className="container red lighten-2 z-depth-3" style={padding_profile}>
                <div className="row">
                  <img className="circle responsive-img z-depth-3" alt='picture' src={String(picture2)} style={pic_size} />
                </div>
                <div className="row">
                  <div className="container white z-depth-3" style={padding_bottom}>
                    <p style={fonts_size}>Developer</p> 
                    <p>Jakee Indapanya</p>
                    <p>5910110044</p>
                    <p>Computer engineering</p>
                    <p>Prince of songkla university</p>
                  </div>
                </div>  
              </div>
            </div>

            <div className="col s4">
              <div className="container red lighten-2 z-depth-3" style={padding_profile}>
                <div className="row">
                  <img className="circle responsive-img z-depth-3" alt='picture' src={String(picture3)} style={pic_size} />
                </div>
                <div className="row">
                  <div className="container white z-depth-3" style={padding_bottom}>
                    <p style={fonts_size}>Developer</p> 
                    <p>Pun Ruenjaruwatana</p>
                    <p>5910110419</p>
                    <p>Computer engineering</p>
                    <p>Prince of songkla university</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

