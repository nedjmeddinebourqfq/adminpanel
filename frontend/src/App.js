// App.js

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cookies from "universal-cookie";

const cookies = new Cookies();

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      isAuthenticated: false,
      userData: [], // Added state for user data
    }
  }

  componentDidMount() {
    this.getSession();
  }

  getSession = () => {
    fetch("/accounts/session", {
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.isAuthenticated) {
        this.setState({ isAuthenticated: true });
        // Fetch user data upon successful authentication
        this.fetchUserData();
      } else {
        this.setState({ isAuthenticated: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchUserData = () => {
    // Simulated user data - replace with actual data fetching logic
    const userData = [
      { username: 'User1', email: 'user1@example.com', dailyRevenue: 100, totalRevenue: 1000 },
      { username: 'User2', email: 'user2@example.com', dailyRevenue: 150, totalRevenue: 2000 },
      // Add more user data as needed
    ];
    this.setState({ userData });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  login = (event) => {
    event.preventDefault();
    // Implement login logic here
  }

  whoAmI = () => {
    // Implement logic to display current user information
  }

  logout = () => {
    // Implement logout logic here
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="container mt-3">
          <h1>Admin panel</h1>
          <br />
          <h2>Login</h2>
          <form onSubmit={this.login}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type="text" className='form-control' id='username' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type="password"
                className='form-control'
                id='password'
                name='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <div>
                {this.state.error && <small className='text-danger'>{this.state.error}</small>}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      );
    }

    return (
      <div className='container mt-3'>
        <h1>Admin panel</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Daily Revenue</th>
              <th>Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>${user.dailyRevenue.toFixed(2)}</td>
                <td>${user.totalRevenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger btn-logout" onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default App;
