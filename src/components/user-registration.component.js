import React, { Component } from 'react';

export default class UserRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      date: new Date(),
      users: [],
      role: []
    };
  }

  handleUserRegistration(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username
    };
    console.log(user);

    this.setState({
      username: ''
    });
  }

  render() {
    return (
      <div>
        <p>New User</p>
      </div>
    );
  }
}
