import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartbtn from "./buttons/Cartbtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Container className="py-2"  fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fs-17 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link"  to="/home">Home</NavLink>
            <NavLink className="nav-link"  to="/products">Products</NavLink>
            <NavLink className="nav-link"  to="/about">About Us</NavLink>
            <NavLink className="nav-link"  to="/contact">Contact Us</NavLink>
            
          </Nav>
          <Navbar.Brand className="mx-auto fw-bold navb" to="#">Apple Market</Navbar.Brand>
          <Login/>
          <Signup></Signup>
          
          <Cartbtn></Cartbtn>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
  );
};

export default Header;
