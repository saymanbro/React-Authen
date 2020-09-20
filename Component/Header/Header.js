import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import logo from './Logo.png'

const Header = () => {
    return (
        <div  className='main-div'>
        <Navbar sticky='top' bg="dark" variant="primary">
       <img className='logo' src={logo}  alt="logo"/>
     <Nav className="ml-auto">
      <Nav.Link href="#news">News</Nav.Link>
      <Nav.Link href="#destination">Destination</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar>
 </div>
    );
};

export default Header;