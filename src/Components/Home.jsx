import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark" className='carousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2021/08/03/06/47/earrings-6518631_1280.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_1280.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2017/01/16/14/17/make-up-1984115_1280.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Home