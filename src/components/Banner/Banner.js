import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
  <div className="banner">
    <h2> Brainstorming for desired perfect Usability </h2>
    <p>
      Our design projects are fresh and simple and will benefit your business
      greatly.Learn more about our work!
    </p>
    <Link to="/stats"> Views Stats </Link>
  </div>
);

export default Banner;
