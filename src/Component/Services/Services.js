import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleService from '../SingleService/SingleService'
import './Services.css'

const Services = () => {
  const { AllService } = useAuth();
  return (

    <div className='container'>
         <h3 className='pt-4'>Remove your tiredness</h3>
          <h5>In our travel area, you can spend your time lonely for your refreshment. </h5>
      <div className="row mt-4 pt-3">
        <div className="col-lg-4">
          <img
            className="relex-area"
            src="https://thumbs.dreamstime.com/b/asian-woman-travel-nature-travel-relax-sit-reading-book-balcony-resort-view-field-moutain-summer-146430628.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-4">
          <img
            className="relex-area"
            src="https://c8.alamy.com/comp/2A1TXYT/shekvetili-georgia-29052019-relaxation-area-with-wooden-benches-and-table-at-paragraph-hotel-travel-2A1TXYT.jpg"
            alt=""
          />
        </div>
   
       
     
        <div className="col-lg-4">
          <img
            className="relax-area"
            src="https://media.istockphoto.com/photos/man-sitting-on-deckchair-in-the-sun-picture-id184356708?s=612x612"
            alt=""
          />
        </div>
      </div>
      <br /><br /><br />

      <h4 className="rooms-featured"> Book Your chosen Place </h4>
      <div className="home-container">
        {AllService.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;