import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Getting any device fixed is not as easy as it sounds and the
              choices that consumers have are limited, that is why we at the
              Mobile Store believe in quality and delivering the best repair
              service to customers across the UK. Mobile Store was established
              in the year 2004 and have been working on smart phone repairs,
              tablet repairs, computer repair and various other electronic
              device services since. Currently, the company has four stores that
              are situated in Luton, Hitchin, Letchworth and Loughton. We are
              the largest stockist of parts in the UK that means instant repairs
              and least hassle. Our stores offer a one-stop solution for the
              repairs of mobile phones, computers, consoles, tablets and TVs.
              Here is why we are the most trusted Mobile Repair company in the
              UK.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 display-flex justify-content-center">
            <img
              src="https://us.123rf.com/450wm/rastudio/rastudio2009/rastudio200900088/155298997-about-us-abstract-concept-vector-illustration-.jpg?ver=6 "
              alt="aboutus"
              height="400px"
              width="500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
