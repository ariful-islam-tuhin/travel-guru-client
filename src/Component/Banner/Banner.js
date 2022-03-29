import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

  //  <img src="https://i.ibb.co/pPGjydg/Rectangle-1.png" alt="" />
  return (

<>

  <div className='background-img '>
<Carousel variant="text-white " >
      <Carousel.Item>
        <img
          className="d-inline height w-40"
          src="https://i0.wp.com/allholidaybd.com/wp-content/uploads/2019/06/Nilachal.jpg?resize=708%2C372&ssl=1"

        />
        <Carousel.Caption className='mb-4 pb-4'>
          <h1>Bandarban</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-inline height w-40 "
          src="https://i.ytimg.com/vi/PSr-MTc5sRk/maxresdefault.jpg"

        />
        <Carousel.Caption className='mb-4 pb-4' >
          <h1>Sylhet, Sremangal</h1>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         className="d-inline height w-40"
         src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2019%2F10%2F29%2F4c567690cd3663ddb127dc60c27e5ae6-Tourism-1.jpeg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"

        />
        <Carousel.Caption className='mb-4 pb-4' >
          <h1>cox bazar</h1>

        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>

  </div>
  
</>

  );
};

export default Banner;