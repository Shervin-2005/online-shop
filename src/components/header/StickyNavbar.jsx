import React from 'react'
import  './Header.css';

function StickyNavbar(props) {
  return (
    <nav className='sticky-navbar'>
     {props.children}
    </nav>
  )
}

export default StickyNavbar
