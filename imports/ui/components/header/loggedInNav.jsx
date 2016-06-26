import React from 'react';

export default class LoggedInNav extends React.Component {
  render(){
    return(
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a onClick={this.props.logout}>Log out</a></li>
            </ul>
    );
  }
  }
