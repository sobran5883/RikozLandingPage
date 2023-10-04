import React from "react";
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import './navbar.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/navlogo.png'

const Navbar=()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <div className="navbarContainer">
            <div className="navbarLeft">
                <img className="logo" src={logoImg} alt="Img" />
            </div>
            <div className="navbarMiddle">
                {/* <ul className="nav-menu"> */}
                <ul className={click?"nav-menu active":"nav-menu"}>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/service">Service</Link></li> 
                    <li><Link to="/about">Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbarRight">
                <button className="signupButton">Sign Up</button>
            </div>
            <div className='humburger' onClick={handleClick}>
                {click ?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
            </div>
        </div>
    )
}

export default Navbar;
