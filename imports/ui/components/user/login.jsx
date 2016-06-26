import React from 'react';

export default class Login extends React.Component {

  handleSubmit(event){
    event.preventDefault(); 

    let ele = $(event.target);
    let email = ele.find("#email").val();
    let password= ele.find("#password").val();

    //Login user
    Meteor.loginWithPassword(email,password, (err) => {
      if(err) {
            Materialize.toast(err.reason, 4000) ; 
      }else{
            //redirect
            FlowRouter.go('/'); 
      }
    });
  }

  render(){
    return(
      <div> 
        <div className="row">
          <h4 className="text-center"> Log in</h4> 
          <form onSubmit={this.handleSubmit} className="col offset-s4 s4">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" /> 
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" /> 
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="waves-effect waves-light btn btn-block">Log in</button>
            </div>
          </form> 
        </div> 
      </div> 
    );
  }
}
