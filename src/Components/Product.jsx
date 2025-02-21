
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './ProductSlice'

function Search({pros,searchQuery}) {

  const dispatch=useDispatch()
      const cart=useSelector(state=>state.cart.value)


  const filteredProducts = pros.filter((pro) =>
    pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (

<div className='main'>
  <h2 className='text-center m-3'> Products</h2>
  <Container>
    <Row className='g-2'>
    {filteredProducts.length > 0 ? (
        filteredProducts.map((filtered) => (
          <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <div  key={filtered.id}>
          <Card >
                <Card.Img variant="top" src={filtered.image} className='product-img'/>
                <Card.Body>
                    <Card.Title>{filtered.title}</Card.Title>
                    
              <Link to={`/productdetails/${filtered.id}`} key={filtered.id} ><Button variant="warning" className='m-2' >View</Button></Link>
              <Button variant="primary" onClick={()=>dispatch(addToCart(filtered))} >Add To Cart</Button>     
                </Card.Body>
            </Card>
          </div>
          {/* <div key={filtered.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <img src={filtered.image} alt={filtered.title} style={{ width: "100px", height: "100px" }} />
            <p>{filtered.title}</p>
            <p><strong>${filtered.price}</strong></p>
            <Link to={`/productdetails/${filtered.id}`} key={filtered.id} ><Button variant="warning" className='m-2' >View</Button></Link>
            <Button variant="primary" onClick={()=>dispatch(addToCart(filtered))} >Add To Cart</Button>     
          </div> */}
          </Col>
          
        ))
      ) : (
        <p>No products found</p>
      )}
    </Row>
  </Container>
</div>


   

  )
}

export default Search