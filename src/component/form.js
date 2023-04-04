import React from "react";
import './form.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {  
      fields: {},   
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);   
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your form has been validated successfully.");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please Fill the column";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please Fill the column";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Invalid Email";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Enter your Password";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
        !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) &&
        !(fields["password"].match(/([0-9])/)) 
      ) {
        formIsValid = false;
        errors["password"] = "*Weak";
      }
      else if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "*Medium";
        }
       else if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "*Strong";
        }
  }
    this.setState({
      errors: errors
    });
    return formIsValid; 
  }
render() {
  return (
  <div id="main-registration-container">
    <h3>Dynamic Form</h3>
   <div id="register">
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your username <br></br></label>
      <input type="text" name="username" placeholder="  your Username" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>Enter your email <br></br></label>
      <input type="text" name="emailid" placeholder="  your Email" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>Enter your password <br></br></label>
      <input type="password" name="password" placeholder="your Password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <input type="submit" className="button"  value="Submit"/>
      </form>
  </div>
</div>
    );
}
}
export default RegisterForm