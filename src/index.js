import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Section from './Section';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header/>
    <Section/> 
    <Login/> 
    <Footer/>
    
    
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
