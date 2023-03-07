import './style.css';
function Login(){

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
            <form className="form" method="post" action="" name="loginForm">
              <h3 id="start"> Start banking by signing in: </h3>
              <br/>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Your UserName" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" name="user_password" className="form-control" placeholder="Enter Your Password" required onkeyup="validatePassword()" minlength="8" maxlength="20"/> 
                </div>
                 <div className="error" id="passwordErr"> </div>
                <div className="mb-3">
                    <button type="submit" name="submit" className = "btn btn-primary">Secure Login</button>
                </div>

                <div>
                 <a href="signup.html">
                  <button type="submit" name="submit" className = "btn btn-primary">Create an account </button>
                 </a>                   
                </div>
              
            </form>
         </div>
     </div>   
     </section>   
     </div>
     </>
  
);
}
export default Login;