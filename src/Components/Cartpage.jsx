import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../Components/ProductSlice'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cartpage() {
    const products=useSelector(state=>state.cart.value)
     const dispatch=useDispatch()
     console.log(products)

  return (
    <div className='main'>
        <h2 className='text-center' >Cart</h2>
        <Container className='mb-5'>
            <Row className='g-2'>
                {products.map((data,index)=>{
return (
    <Col xs={6} sm={6} md={4} lg={4} xl={3}>
    <Card>
      <Card.Img variant="top" src={data.image} className='product-img'/>
      <Card.Body>
      <Card.Title>
         {data.title}
         </Card.Title>
        <Card.Text>
         {data.category}
        </Card.Text>
        <Card.Title>
         {data.price}
         </Card.Title>
        
      </Card.Body>
    </Card>
    </Col>
)
                   

                })}
            </Row>
            <Button variant="danger" onClick={()=>dispatch(removeCart())}  className='m-3'>Clear Cart</Button>
        </Container>
        
    </div>
  )
}

export default Cartpage