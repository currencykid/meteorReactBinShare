import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import {User} from '../api/User.js'; 
import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import MainLayout from '../ui/containers/MainLayout.jsx'; 
import Header from '../ui/components/header/Header.jsx'; 
import Register from '../ui/components/user/register.jsx'; 
import Login from '../ui/components/user/login.jsx'; 


FlowRouter.route('/', {
  name: 'Main',
  action() {
    mount(MainLayout, {
      children: <Home /> 
    })
  }
});

FlowRouter.route('/register', {
  name: 'Register',
  triggersEnter: [isLoggedIn], 
  action() {
    mount(MainLayout, {
      children: <Register /> 
    })
  }
});

FlowRouter.route('/login', {
  name: 'Login',
  triggersEnter: [isLoggedIn], 
  action() {
    mount(MainLayout, {
      children: <Login /> 
    })
  }
});

//check if user is logged in
function isLoggedIn(context, doRedirect){
  if(User.isLoggedIn()){
    doRedirect('/'); 
  }
}
