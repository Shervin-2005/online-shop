import React from 'react';
import AdvBar from "./AdvBar.jsx";
import Navbar from './Navbar.jsx';

import Adv1Img from "../../images/Adv1.png";
import ShopIcon from "../../images/Shop.svg";
import UserIcon from "../../images/User.svg";
import BellIcon from "../../images/Bell.svg";
import LogoTxtIcon from "../../images/LogoTxt.png";
import LogoIcon from "../../images/Logo.png";
import SearchIcon from   "../../images/Search.svg";


import  './Header.css';
import StickyNavbar from './StickyNavbar.jsx';

const Header = () => {
  return (
    <header className='header'>
      <AdvBar>
      {<img src={Adv1Img} alt='adv1'/>}
      </AdvBar>

    <Navbar>
      <div className='navbar-left'>     
     {<img src={LogoIcon} alt='Logo'/>}
     {<img src={LogoTxtIcon} alt='LogoTxt'/>}
     </div>
      {
      <div className='search-box'>
        <img  src={SearchIcon} alt=""/>
        <input type="text" placeholder='Search...'/>
      </div>
      }
      
    <div className='navbar-right'>
    {<img src={BellIcon} alt='Bell'/>}
    {<img src={UserIcon} alt='User'/>}
    <span className="nav-divider"></span>
    {<img src={ShopIcon} alt='Shop'/>}
    </div>
    </Navbar>

    <StickyNavbar>
    <div className='sticky-navbar-left'>
    <ul>
    <li><a href="/products">Products</a></li>
    <li><a href="/offers">Amazing Offers</a></li>
    <li><a href="/brands">Brands</a></li>
    <li><a href="/new">New Arrivals</a></li>
     <li><a href="/most sellers">Most Sellers</a></li>
    </ul>
     
    </div>
     <a id='select-city' href="/location">🗺️Select your City</a>
    </StickyNavbar>
    </header>
  )
}

export default Header;
