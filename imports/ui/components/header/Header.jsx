import React from 'react';
import {User} from '../../../api/User.js'; 
import LoggedInNav from './loggedInNav.jsx'; 
import LoggedOutNav from './loggedOutNav.jsx'; 

export default class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: User.isLoggedIn()
    }

    this.logout = this.logout.bind(this); 
  }

  logout(){
    Meteor.logout((err)=>{
      if(err){
            Materialize.toast(err.reason, 4000) ; 
      } else {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        FlowRouter.go('/'); 
      }
    });
  }

  render() {

    let navOptions;

    if(User.isLoggedIn()){
      navOptions = (
        <LoggedInNav logout={this.logout}/> 
      );
    } else{
      navOptions = (
        <LoggedOutNav /> 
      );
    }

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            {navOptions} 
          </div>
        </nav>

      </div>
    );
  }
}
