import React, { Component } from 'react';

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
            <div className = "login">
                <form onSubmit={this.handleSubmit}>
                    <h1>Email : </h1>
                    <input  id = "email" value = {this.state.email} onChange = {this.changeHandler}/>
                    <h1>Password :</h1>
                    <input type = "password" id = "password" value = {this.state.password} onChange = {this.changeHandler}/>
                    <br/><input type = "submit" value="submit"/>
                </form>
            </div>
        );
    }

}