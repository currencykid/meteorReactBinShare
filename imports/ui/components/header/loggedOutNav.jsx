import React from 'react';

export default class LoggedOutNav extends React.Component {
  render(){
    return(
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Log in</a></li>
            </ul>
    );
  }
  }
