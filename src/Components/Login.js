import React, { Component } from 'react';
import './homepage.css'

const dataBase = [
    {email:"5910110044@psu.ac.th", password : "123"},
    {email:"5910110419@psu.ac.th", password : "123"},
    {email:"5910110095@psu.ac.th", password : "123"},
    {email:"admin", password: "admin"},
]

export default class Login extends Component {

// constructor
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : ""
        }
    }

    checkInput = () => {
        return (this.state.email.length > 0 && this.state.password.length)? true : false
    }

    handleSubmit = (event) => {
        let self = this
        event.preventDefault();
        let found = dataBase.find(function(element){
            return self.state.email == element.email && self.state.password == element.password
        });
        if(found != undefined)
            window.location.href = '/dashboard'; 


    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state);
    }

    render(){
        return(
            <body className = " panel">
             <div className="container">
                <div className="row">
                    <div className="col s6 offset-s3">
                    <div className="card-panel">
                    
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <h1>Login</h1>
                            </div>
                            
                            <div className="container">
                                <div className="row">
                                    <div  className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input  className="validator" type="email" id = "email" value = {this.state.email} onChange = {this.changeHandler}/>  
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div  className="input-field col s12">
                                    <i className="material-icons prefix">vpn_key</i>
                                    <input type = "password" id = "password" value = {this.state.password} onChange = {this.changeHandler}/>
                                    <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="btn green col s12" type ="submit" value="submit"/>
                                </div>
                                <div className="row">
                                <p>No account?  <a href="/login">Create Account Here!</a></p>
                                
                                </div>
                            </div>
                            
                            <br/>
                        </form>
                    </div> 
                    </div>
                </div>
              </div>
            </body>
        );
    }

}