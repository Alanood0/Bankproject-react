import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './Header';
import './style.css';
// import Footer from './Footer';
// import Section from './Section';
// import Login from './Login';
import Aboutus from './Aboutus';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
      
    </Routes>
   </BrowserRouter>

    </>
  </React.StrictMode>
);

