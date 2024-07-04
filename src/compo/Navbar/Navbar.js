import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import About from '../../page/About/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
   <>
   <nav>
     <div className='logo'>
      <h1>Pooja</h1>
     </div>
     {/* <--- secound part      ----> */}
    <div className=''>
    <div className='secound_one'> 
       <h5>CALL: +91-07714050996</h5>
       <h5>|</h5>
       <h5>Email: Info@pooja.in</h5>
       <div className='input_section'>
        <input placeholder='Search Product here.....'></input>
       <div className='icons' > <FontAwesomeIcon className='icon' color='#ffff' icon={faSearch} /></div>
       </div>
     </div>
      {/* <---  part/2      ----> */}
      <div className='secound_one'>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/product'>PRODUCT</Link></li>
          <li>SERVICE</li>
          <li>CUSTOMERS</li>
          <li><Link to='/contact'>CONTACT US</Link></li>
        </ul>
        <div className='desk'>
          <h4>Distributor`s Desk</h4>
        </div>
      </div>
    </div>
   </nav>
   </>
  );
};

export default Navbar;
