import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../Components/ProductSlice'
import { addToCart } from './ProductSlice'



function ProductDetails() {
    let {productid}=useParams();
    const dispatch=useDispatch()
   
    const [productData,setProductData]=useState({})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${productid}`)
        .then(res=>{
            console.log(res.data)
            setProductData(res.data)
        })
    },{})
    console.log(productid)

  return (
    <div className='main '>
        <Container>
          <Row className='g-2'>
            <Col >

            <h4 className='text-center'>{productData.title}</h4>
        <Card >
      <Card.Img variant="top" src={productData.image} className='details-img' />
      <Card.Body>
        <Card.Text>
         {productData.description}
        </Card.Text>
        <Card.Text>
         {productData.category}
        </Card.Text>
        <Card.Title>
         {productData.price}
         </Card.Title>
         <Button variant="primary" onClick={()=>dispatch(addToCart(productData))} >Add To Cart</Button>   
      </Card.Body>
       
    </Card>
            </Col>
          </Row>
        </Container>
        
    </div>
  )
}

export default ProductDetails