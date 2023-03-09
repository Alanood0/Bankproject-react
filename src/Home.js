import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Login from './Login';
function Home(){

    return(
      <>
<Header/>
<Section/> 
<Login/> 
<Footer/>
</>
);
}
export default Home;