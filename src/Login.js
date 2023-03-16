import React from 'react';
import './style.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import Signuppage from './Signuppage';
import Dashboard from './Dashboard';
class Login extends React.Component{

    constructor(){
        super();
        this.state={
            username:"",
            user_password:"",
            passwordErr:"",
            users:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
                res=>{
                    let tempData = res.data;
                    this.setState({
                        users:tempData 
                    });

                }
        );
    }
    validatePassword = (e) => {
        this.setState({user_password:e.target.value});
        let lowerCaseCheck =/^(\S)(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
        // let lowerCaseCheck =/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
      
        if(e.target.value.match(lowerCaseCheck)){
          this.setState({
            passwordErr:""
          });}
         else {
          this.setState({
            passwordErr:"password must contain lowercase,uppercase & symbols"
          });}
      }

      authenticateUser = (e)=>{
        e.preventDefault();
        
        let flag=0;
        this.state.users.forEach(user => {
            if(user.email==this.state.username && user.email==this.state.user_password){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({passwordErr:""});
            window.location.href = '/Dashboard';
            }
        else{
            this.setState({passwordErr:"Invalid details"});
            }   
    }

    render(){
        return(
<>
<div id="login"> 
  <div className="container" id="login__page"/>
    {/* <?php echo $msg ?> */}
    <div className="row text-center">
    
    </div>
    <section className="container2"> 
    <div className="row justify-content-center">
        <div className="col-xl-6">
            <form className="form" method="post" action="" name="loginForm"  onSubmit={this.authenticateUser}>
              <h3 id="start"> Start banking by signing in: </h3>
              <br/>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Your UserName" required onChange={(e)=>{
                                            this.setState({username:e.target.value})
                                        }} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" name="user_password" className="form-control" placeholder="Enter Your Password" required onChange={this.validatePassword} minlength="6" maxlength="20"/> 
                </div>
                 <div className="error" id="passwordErr" name="passwordErr">  {this.state.passwordErr}</div>
                <div className="mb-3">
                <Link to='/Dashboard'>   <button type="submit" name="submit" className = "btn btn-primary">Secure Login</button></Link>
                </div>

                <div>
            
                 <Link to='/Signuppage'> <button type="submit" name="submit" className = "btn btn-primary">Create an account </button></Link>
                                   
                </div>
              
            </form>
         </div>
     </div>   
     </section>   
     </div>
     </>
                                    
                                    );
                                }
                            }
                            
export default Login;