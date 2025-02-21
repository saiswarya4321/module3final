import Button from 'react-bootstrap/Button';
import React from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Components/ProductSlice'

function Products() {
    const [products, setProducts] = useState([])
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart.value)


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
              
                setProducts(res.data)
            })
    }, [])

    return (
        <div>
           
            <Container className='main'>
            <h1 className='text-center m-3'>Products</h1>
                <Row className='g-2'>
                {products.map((product,index)=>{
               return (
                <Col xs={6} sm={6} md={4} lg={4} xl={3}>
                <div>
                        <Card >
                <Card.Img variant="top" src={product.image} className='product-img'/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    
              <Link to={`/productdetails/${product.id}`} key={index} ><Button variant="warning" className='m-2' >View</Button></Link>
              <Button variant="primary" onClick={()=>dispatch(addToCart(product))} >Add To Cart</Button>     
                </Card.Body>
            </Card>
                    </div>
                </Col>
                    
                )
            })}
                </Row>
            </Container>
           
       
        </div>

    );
}

export default Products;