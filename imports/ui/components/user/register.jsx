import React from 'react';


export default class Register extends React.Component {
  
  handleSubmit(event){
      event.preventDefault();  

      let ele = $(event.target);

      let email = ele.find("#email").val();
      let password= ele.find("#password").val();
      let confirmPassword= ele.find("#confirmPassword").val();

      if(password === confirmPassword && password !== "" && confirmPassword !== ""){
        let accountInfo = {
          email: email,
          password: password
        };

        Accounts.createUser(accountInfo, function(err){
          if(err){
            Materialize.toast(err.reason, 4000) ; 
          } else {
            //redirect
            FlowRouter.go('/'); 
          }
        });

      }else{
        Materialize.toast("Passwords don't match!", 4000) ; 
      }
  }
  
  render() {
    return (
      <div> 
        <div className="row">
          <h4 className="text-center"> Create account </h4> 
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
              <div className="input-field col s12">
                <input id="confirmPassword" type="password" className="validate" /> 
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>
            <div className="row">
              <button className="waves-effect waves-light btn btn-block">Create</button>
            </div>
          </form> 
        </div>

      </div>
    );
  }
}
