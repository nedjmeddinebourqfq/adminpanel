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
      } else {
        this.setState({ isAuthenticated: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
          <h1>Admine panel</h1>
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
        <h1>Admine panel</h1>
        <p>You are logged in</p>
        <button className="btn btn-primary mr-2" onClick={this.whoami}>whoami</button>
        <button className="btn btn-danger" onClick={this.logout}>Logout</button>
      </div>
    )
    
  }
}

export default App;
