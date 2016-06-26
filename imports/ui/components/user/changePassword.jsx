import React from 'react';

export default class ChangePassword extends React.Component {
  handleSubmit(event){
    event.preventDefault(); 

    let oldPassword = this.refs.oldPassword.value;
    let newPassword = this.refs.newPassword.value;
    let confirmPassword = this.refs.confirmPassword .value;

    if(newPassword === confirmPassword){
      Accounts.changePassword(oldPassword, newPassword, (err) => {
        if(err){
            Materialize.toast(err.reason, 4000) ; 
      }else{
            Materialize.toast("Password has been updated!", 4000) ; 
            FlowRouter.go('/'); 
      }
      });
    }

  }

  render(){
    return(
      <div> 
        <div className="row">
          <h4 className="text-center"> Change Password</h4> 
          <form onSubmit={this.handleSubmit.bind(this)} className="col offset-s4 s4">
            <div className="row">
              <div className="input-field col s12">
                <input id="oldPassword" ref="oldPassword" type="password" className="validate" /> 
                <label htmlFor="oldPassword">Old Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="newPassword" ref="newPassword" type="password" className="validate" /> 
                <label htmlFor="newPassword">New Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="confirmPassword" ref="confirmPassword" type="password" className="validate" /> 
                <label htmlFor="confirmPassword">Confirm Password</label>
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
