import React from 'react';

function Section(){

    return(
    
<div className="container-fluid hero-content">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 text-center" >
          <h1> Welcome to sharjah islamic bank </h1>
          <br/>
          <p className="lead muted"> 
            An exclutive banking experinces built to serve the needs of a community to move,
            <br/>
            Delivering creative solution based on islamic principles of partnership and trust. </p>
          <br/>
          <br/>
          <a className="get-started" href="./aboutus.html"> Discover more about US!</a>
        </div>
        <div className="col-md-6 col-sm-12 text-center" >
          <div className="hero-img-div">
            <img className="hero-img" src="https://assets.wam.ae/uploads/2019/04/452998792362513302.jpg" alt="img-showing-money-transfer" style={{height:'68vh' , width: '83%',verticalAlign: 'middle', borderStyle: 'none', display: 'flex'}} />
          </div>
        </div>
      </div>
      </div>
);
}
export default Section;