import React from 'react';
import { Link } from "react-router-dom"
import Aboutus from './Aboutus';
import Home from './Home';
function Header(){

    return(
<header>
<div> <img id="logo"src="https://m.eyeofriyadh.com/directory/images/2022/12/3527269eced50.jpg" alt=""/> </div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="./index.html">Sharjah islamic Bank</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <a className="nav-link">
      <Link to='/'>Home</Link> </a>
      </li>
      <li className="nav-item">
        <a className="nav-link"> 
      <Link to='/Aboutus'>About Us</Link> </a>
      </li>
      <li className="nav-item">
      <a className="nav-link">
      <Link to='/Signuppage'>Sign Up</Link> </a>

      </li>
  
    </ul>
  </div>
</nav>
</header>
);
}
export default Header;