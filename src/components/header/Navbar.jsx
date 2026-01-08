import React from 'react'
import  './Header.css';

function Navbar(props) {
  return(
    <nav className='navbar'>
     {props.children}
    </nav>
  )
}
export default Navbar
