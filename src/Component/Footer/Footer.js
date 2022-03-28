import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="row">
          <div className="col-lg-2 ">
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
            />
          </div>
          <div className="col-lg-4 ">
            <h5>About Us</h5>
            <p className="NavLink">
              Totally Sequre journy, We takcare all pessanger. Our agency Founded over 5 years ago,  it is one of
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
          <div className="col-lg-4 last-footer ">
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
