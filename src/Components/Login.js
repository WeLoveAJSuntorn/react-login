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
                                       <input  className="validator" id = "email" value = {this.state.email} onChange = {this.changeHandler}/>  
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