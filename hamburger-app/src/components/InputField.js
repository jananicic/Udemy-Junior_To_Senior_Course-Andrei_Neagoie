import React, { Component } from 'react';
import './css/inputField.css';

class InputField extends Component {
    render(){
        return(
            <div>
                <h1>Enter info for new user:</h1>
                <label for="email"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" id="name"/>
                <label for="email"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" id="username"/>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="email"/>
            </div>
        );
    };
}

export default InputField;