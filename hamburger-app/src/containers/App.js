import React, { Component } from 'react';
import Div from '../components/Div';
import InputField from '../components/InputField';
import Users from '../components/Users';
import './app.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: 'red',
      users: []
    }
  }

  changeColor = () => {
    document.getElementById('div1').style.backgroundColor === 'red' 
      ? this.setState({color: 'blue'}) 
      : this.setState({color: 'red'});
  }

  addUser = () => {
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const email = document.getElementById('email');

    this.setState({
      users: [...this.state.users, {
        id: Math.random().toString(36).substr(2, 9),
        name: name.value,
        username: username.value,
        email: email.value
      }]
    });

    name.value = '';
    username.value = '';
    email.value = '';

  }

  deleteUser = id => {
    const users = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({
      users
    });
  }

  deleteUsers = () => {
    this.setState({
      users: []
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div style={{display: 'inline-block', width: '28%'}}>
          <Div color={this.state.color}/>
          <button id="changeColorButton" onClick={this.changeColor}>Click to change color!</button>
          <InputField />
          <button onClick={this.addUser}>Add User!</button>
        </div>
        {this.state.users.length > 0 
        ? <Users deleteUser={this.deleteUser} deleteUsers={this.deleteUsers} users={this.state.users}/>
        : <div></div>}
      </div>
      
    );
  }
}

export default App;
