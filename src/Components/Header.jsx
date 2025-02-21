import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import "../Components/styles/HeaderStyle.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Header({setSearchQuery,searchQuery}) {
  const cart=useSelector(state=>state.cart.value)
  //console.log(cart.length)
    const dispatch=useDispatch()

  return (

    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed='top'>
    <Container fluid>
      <Navbar.Brand href="#">Shopify</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 header"
          style={{ maxHeight: '100px' }}
          navbarScroll 
        >
           <NavLink to="/">Home</NavLink>
         
          <NavLink to="product">Products</NavLink>
          <NavLink to="cartpage">Cart({cart.length})</NavLink>
        
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>{setSearchQuery(e.target.value)}}
          />
          <Link to="product"><Button variant="success" >Search</Button></Link>
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>


//     <div className='header' >

//       <div className='header-left' >
//       <NavLink to="/"><span>Home</span></NavLink>
     
//       <NavLink to="Cartpage" ><span >Cart({cart.length})</span></NavLink>
//       <NavLink to="product"><span>Products</span></NavLink>
//       </div>
      
// <div className='header-right'>
//  <input type='text' className='search' placeholder='Search' onChange={(e)=>{setSearchQuery(e.target.value)}}/>
//  <Link to="product"><Button className='buttons' onClick={()=>{searchQuery}}>Search</Button></Link>

  

  
  
// </div>
     
//     </div>
  )
}

export default Header