import React from 'react';
import {useState} from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu]= useState(false);
  
  
  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.woodkart} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a> </li>
      <li className="p__opensans"><a href="#about">About</a> </li>
      <li className="p__opensans"><a href="#menu">Menu</a> </li>
      {/* <li className="p__opensans"><a href="#awards">Awards</a> </li> */}
      <li className="p__opensans"><a href="#contact">Contact</a> </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In/Register</a>
    <div />
    <a href="/" className="p__opensans">Shopping Bag</a>
    </div>
    
    <div className="app__navbar-smallScreen">
       <GiHamburgerMenu color="#fff" fontSize={27} onClick={() =>setToggleMenu(true)}/>

      {toggleMenu && (
       <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
         <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)}/>
         <ul className="app__navbar-smallScreen-links">
      <li className="p__opensans" href="#home">Home</li>
      <li className="p__opensans" href="#about">About</li>
      <li className="p__opensans" href="#menu">Menu</li>
      <li className="p__opensans" href="#awards">Awards</li>
      <li className="p__opensans" href="#contact">Contact</li>
         </ul>
       </div>
       )}
    </div>
  </nav>
  )
  }

export default Navbar;
