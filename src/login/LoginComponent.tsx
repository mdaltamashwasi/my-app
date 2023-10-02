import React, { Component } from "react";
export default class LoginComponent extends Component{
    render(){
        return (
            <div>
                <title>Login</title>
                <h1> Login </h1>
                <div>
                    <input type="text" name="userName"></input>
                    <input type="text" name="password"></input>
                    <input type="button" name="login"></input>
                </div>
            </div>
           
        )
    }
}