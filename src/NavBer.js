import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navber.css"

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const NavBer = () => {
  return (
    <div className='nav' style={{width:"100%"}}>
      <Navbar bg="light" expand="lg" style={{width:"100%"}}>
      <Container>
        <Navbar.Brand href="#home"><button className='bt1'>قدم عرضا</button></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav_ul me-auto">
            
            <Nav.Link  className='li' >الاستضافه</Nav.Link>
            <Nav.Link className='li' to="#تواصل">تواصل</Nav.Link>
            <Nav.Link className='li' href="#link">خدمات</Nav.Link>
            <Nav.Link className='li' href="#home" style={{marginRight:"10px"}}>
عن الشركة</Nav.Link>
            <Nav.Link className='li' href="#link" style={{color:" #1977cc", borderBottom:"3px solid #1977cc"}}>الرئيسية</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home"><img src='https://pure-soft.com/uploads/logo.png' style={{width:"100px" , height:"80px"}}/></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBer
