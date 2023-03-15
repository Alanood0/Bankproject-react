import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import './About.css';
function aboutus(){

    return(
<>
<Header/>
<body> 
  
<section id="section1">
  <div>
      <h1>About sharjah islamic Bank</h1>

      <p className="text">
  <br/>
  IN SIB, We deliver long-term value and enhance the financial health to all our customers with a range of specialized products and services.
  Established by Emiri decree by His Highness Dr. Sheikh Sultan Bin Mohamed Al Qassimi in 1975, Sharjah Islamic Bank (SIB) transitioned from commercial to Islamic banking in 2002. Today, we are a financial institution providing a broad variety of Sharia'a-compliant, retail, corporate and investment products and services to our valued customers via an extensive UAE network.
    </p>
  </div>
</section>
<section id="section2"> 
<div>
  <i class="mission-icon">
    <img src="https://www.sib.ae/images/default-source/default-album/mission-icon.svg?sfvrsn=38a9a679_3" alt="" class="img-fluid"/></i> 
    <h3>Mission</h3>
    <p> We are committed to the development of our community by serving customers with socially responsible solutions, and providing world-class employment opportunities based on knowledge, teamwork, respect and leadership-while creating sustainable value for our shareholders.</p>
</div>

<div>
  <i class="mission-icon">
    <img src="https://www.sib.ae/images/default-source/default-album/vision-icon.svg?sfvrsn=d9fa2ada_3" alt="" class="img-fluid"/></i>
    <h3>Vision</h3>
    <p>To be the bank of choice for creative customer solution, based on excellence and islamic principles of partnership, trust and equality for all.</p>
</div>

<div>
  <i class="mission-icon">
  <img src="https://www.sib.ae/images/default-source/default-album/value-icon.svg?sfvrsn=5af4f256_3" alt="" class="img-fluid"/> </i>
  <h3>Values</h3>
  <p>As everyone's bank, we believe in people, first and foremost. Our bank promotes a harmonious environment of fairness, trust and respect. We offer our customers an innovative banking experience via customized solutions, and empower our staff with abdunat opportunity for career development.</p>
</div>

</section>
</body>
<Footer/>
</>
  
  );
  }
  export default aboutus;