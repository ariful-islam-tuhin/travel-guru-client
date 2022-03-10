import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleService from '../SingleService/SingleService'
import './Services.css'

const Services = () => {
  const { AllService } = useAuth();
  return (

    <div className='container'>
      <h2 className="rooms-featured">Room Booked</h2>


      <div className="home-container">
        {AllService.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;