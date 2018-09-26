import React, { Component } from 'react';
import fireBase from '../fireBase'

const dbLogin = fireBase.database().ref().child('account');


export default class Login extends Component {

// constructor
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            mode: "login",
        }
    }

    checkInput = () => {
        return (this.state.email.length > 0 && this.state.password.length)? true : false
    }


    handleSubmit = (event) => {
        let self = this
        event.preventDefault();
        dbLogin.on('value', function(dbElement){
            let found = dbElement.val().find(function(element){
                console.log(element)
                return self.state.email == element.email && self.state.password == element.password
            })

            if( found != undefined)
                window.location.href = './board'
            else 
                alert("account not found try again")
        })


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
                <input type = "password" id = "passworddashboard" value = {this.state.password} onChange = {this.changeHandler}/>
                <br/><input type = "submit" value="submit"/>
            </form>
            </div>
        );
    }

}