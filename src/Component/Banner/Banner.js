import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

  //  <img src="https://i.ibb.co/pPGjydg/Rectangle-1.png" alt="" />
  return (



  <div className='background-img '>
<Carousel variant="text-white " >
      <Carousel.Item>
        <img
          className="d-inline w-50"
          src="https://i.ibb.co/5BMPmQ7/Sreemongol.png"

        />
        <Carousel.Caption className='mb-4 pb-4'>
          <h1>Sremongol</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-inline w-50"
          src="https://i.ibb.co/PgTYz3v/sundorbon.png"

        />
        <Carousel.Caption className='mb-4 pb-4' >
          <h1>Sundar Ban</h1>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         className="d-inline w-50"
         src="https://i.ibb.co/MsSKHxy/Cox-s-Bangladesh-7.png"

        />
        <Carousel.Caption className='mb-4 pb-4' >
          <h1>cox bazar</h1>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>

  );
};

export default Banner;