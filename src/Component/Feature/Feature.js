import React from 'react';
import "./Feature.css";

const Feature = () => {
    return (
        <div>
              {/* fill comfort area */}
      <div className="fill-comfort">
        <h1 className="comfort">Excitement Meets Comfort and Luxury</h1>
        <h3 className='p-3'>  Free high-speed WIFI Available in our Shop and bus  </h3>
        <div className="row fill-comfort-para">
          <div className="col-lg-4">            
          <img
             
              src="https://static4.depositphotos.com/1010192/271/i/950/depositphotos_2711000-stock-photo-two-buses.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
             
              src="https://c8.alamy.com/comp/C90RJB/the-food-gallery-at-kaufhaus-des-westens-kadewe-berlin-germany-C90RJB.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
            
              src="https://c8.alamy.com/comp/2AA0328/inside-restaurant-in-kadewe-department-store-wittenbergplatz-west-berlin-germany-kaufhaus-des-westens-berlin-germany-2AA0328.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* fill comport area */}

    
            
        </div>
    );
};

export default Feature;