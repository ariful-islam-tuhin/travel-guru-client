import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://organicthemes.com/wp-content/uploads/2020/07/footer-block-preview.jpg"
              alt="logo"
            />
          </div>
          <div className="col-lg-4  ">
            <h5>About Us</h5>
            <p className="NavLink  ">
               Totally Sequre journy, We takcare all pessanger. 
               Our agency Founded over 5 years ago,  it is one of 
              the oldest sites offering less then proper price.Read More....
            </p>
          </div>

          <div className="col-lg-2 ">
            <h5>Follow Us</h5>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Facebook
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Twitter
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Linkedin
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Youtube
              </Link>{" "}
            </p>
          </div>
          <div className="col-lg-2 last-footer ">
            <h5>Contact Us</h5>
            <p className="NavLink">
              Location:Sylhet,Bangladesh <br />
              Mobile Number:+088645747474 <br />
              Shop Contact:+088645747474 <br />
              FAX Number:+0886458774 <br />
              Email Address:info@amc.edu.bd
            </p>
          </div>
        </div>
      </div>
      <p className="last-fotter">
        © Copyright by AMC - all rights reserved. Developed by Arif.
      </p>
    </div>
  );
};

export default Footer;
