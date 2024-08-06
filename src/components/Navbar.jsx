import React, { useState } from 'react';
import '../Navbar.css';
import logo from '../assets/horizon.png';
import { FcGoogle } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const text = 'Official Website of Team Horizon Cusat';
  
  // Split text into letters with spans
  const animatedText = text.split('').map((char, index) => (
    <span
      key={index}
      className="letter"
      style={{ 
        animationDelay: `${index * 0.1}s`, // Adjust delay as needed
        animationDuration: '0.5s',
        animationName: 'fadeIn'
      }}
    >
      {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
    </span>
  ));
  


    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <p className='navbar-team-name'>TEAM<br /> HORIZON</p>
                </div>
                <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#alumni">Alumni</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contactus">Connect Us</a></li>
                </ul>
            </nav>
            <div className='search-box'>
                <FcGoogle size={25} />
                <p>{animatedText}</p>
                <CiSearch size={25} color='white' />
            </div>
        </>
    );
};

export default Navbar;
