import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import Signuppage from './Signuppage';
import Header from './Header';
import Footer from './Footer';
function Dashboard(){

    return(
        <>
        <Header/>
        <Footer/>
        </>
        );
}
export default Dashboard;