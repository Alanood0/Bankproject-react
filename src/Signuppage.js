import React from 'react';
import './Signuppage.css';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import { Link } from "react-router-dom"
import axios from 'axios';

class Signuppage extends React.Component{

  state={
            firstname:'',
            lastname:'',
            user_name:'',
            phone:'',
            email:'',
           password:'',
           phone:'',
           DOB:'',    
           acoounttype:'', 
           subject1:'',
           subject2:'',
           comment:'',           
            errorMessage:'',
            errorMessage1:''
            
        }
        
  storeUserData = (e)=>{
    e.preventDefault();

    let newUser = {
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        user_name:this.state.user_name,
        password:this.state.password,
        email:this.state.email,
        phone:this.state.phone,
        acoounttype:this.state.acoounttype,
        subject1:this.state.subject1,
        subject2:this.state.subject2,
        comment:this.state.comment

    }

    console.log(newUser);

    
    axios.post('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users', {newUser})
        .then(
            res=>{
              console.log(res);
                console.log(res.data);
            }    
        );
  }
  validatePassword = (e) => {
    this.setState({password:e.target.value});
    let lowerCaseCheck =/^(\S)(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
  
    if(e.target.value.match(lowerCaseCheck)){
      this.setState({
      errorMessage:""
      });}
     else {
      this.setState({
      errorMessage:"Password must contain lowercase,uppercase & symbols"
      });}
  }

  render(){
    return(
   
<>
<Header/>
<body>

<div className="container2">
        <h1 className="main-header">Account Reistration Form </h1>
        <p> The information given in this section is considered as the information of the primary account owner information. </p>
        <hr/>
        <form id="app-form" action=""/>
        <fieldset className="sub-container" id="basic-details"/>
          <h2 className="sub-heading"> Account Owner Details </h2>
          <hr/>
            <label for="dropdown" className="standard-label">
              Title<span className="required">*</span>
              <br/>
              <select  id="dropdown" className="standard-select" required>
                <option value="select" disabled selected>Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
            </label>
            <label for=" " className="standard-label">
              First Name<span className="required">*</span>
              <input className="standard-input" name="firstname" id="firstname" type="text" placeholder="First name..." required/>
            </label>
            <label for="lastname" className="standard-label">
            Last Name
              <input className="standard-input" name="lastname" id="lastname" type="text" placeholder="Last name..." required/>
            </label>
            <label for="user_name" className="standard-label">
              User name<span className="required">*</span>
              <input className="standard-input" name="user_name" id="username" type="text" placeholder="User name..." required/>
            </label>
            <label for="phone-number" className="standard-label">
              Phone Number<span className="required">*</span>
              <input className="standard-input" type="tel" id="phone" name="phone" pattern='^\+?\d{10,12}' placeholder="Example: 0500000000" required/>
            </label>
            <label for="email-address" className="standard-label">
              Email<span className="required">*</span>
              <input className="standard-input" id="email-address" type="email" placeholder="Your email address..." required/>
            </label>
            <label for="pass-address" className="standard-label">
              Password<span className="required">*</span>
              <input className="standard-input" id="pass-address" type="password" placeholder="Your password..." required minlength="7"/>
            </label>
            <label for="DOB" className="standard-label">
              Date of Birth<span className="required">*</span>
              <input className="standard-input" type="date" name="DOB" id="DOB" required/>
            </label>
            <label for="accounttype" className="standard-label"/>
              What type of account are you applying for?<span className="required">*</span>
              <br/>
              <select  id="account-select" className="standard-select" name= "accounttype" required>
                <option value="select" disabled selected>Choose Account</option>
                <option value="basic-current">Basic Current Account</option>
                <option value="premium-current">Premium Current Account</option>
                <option value="instant-saver">Access Savings Account</option>
                <option value="instant-saver">joint Account</option>
              </select>
      
              <label for="joint" className="standard-label"/>
                <br/>
              Do you want to add joint owner to the bank account?
                <form>
                <br/>
                <br/>
                <input type = "radio" name = "subject1" value = "Yes"/> Yes
                <input type = "radio" name = "subject2" value = "No"/> No
                <form/>
             
                           
             <label for="terms" className="standard-label"/>
              <br/>
             
            
            <h2 className="sub-heading">Your Consent</h2>
            <hr/>
            <p style={{textAlign: 'center'}} />By ticking this form, I acknowledge that the information I've given in this form is accurate and I agree all the terms and conditions. <p/>
            <form className="terms"/>
             <input type = "checkbox" name = "terms" value = "on" required/> I agree to terms & conditions.
             <br/>
             <br/>

             <input type = "checkbox" name = "terms" value = "on" required/> Tick the box below to allow the bank to use the details you have provided to conduct a credit search if necessary.
             <br/>
             <input type = "checkbox" name = "terms" value = "on" required/> Tick the box below to allow the bank to contact you via email if further information is needed to progress your application.
            <label className="standard-label" id="credit-search" for="credit-search"/>
          
              <label for="comment" className="standard-label" name="comment"/>
             Any addional comments: <address> </address> 
         <textarea></textarea>
<br/>
            <input id="submit-app" type="submit" name="submit" value="Submit Application" onclick="logValues()"/>
            <label>
              <br/>
              <div className="mb-3">
              <Link to='/Dashboard'> <button type="submit" name="submit" className = "standard-label1" > Sign Up </button></Link>
            </div>
            </label>
          
        </form>
 
      </div>
    </body>
<Footer/>
</>
  
  );


}
}

export default Signuppage;