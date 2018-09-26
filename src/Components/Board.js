import React, { Component } from 'react';
import './board.css'

const picture =  require("./laptop.jpg")


export default class DashBoard extends Component {
  render() {
    return (
      <body>
          <nav>
            <div className="nav-wrapper">
                <ul className="right">
                    <li><a href="/aboutus">About us</a></li>
                </ul>
            </div> 
          </nav>
          <div className="container">
            <div className="row margin">
                <div className="col s3">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <h5 className="align">Hey we are CoE students</h5>
                    <h5 className="align">We are code students, try to practice the skill to improve ourself </h5>
                </div>
                <div className="col s2"></div>
                <div className="col s5 ">
                    <img className="pic_size" src={String(picture)}></img>
                </div>
            </div>
          </div>
      </body>
    );
  }
}