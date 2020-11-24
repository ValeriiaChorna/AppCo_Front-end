import React from 'react';
import { Link } from 'react-router-dom';
import phoneImg from '../../img/iPhoneX@2x.png';

const Banner = () => (
  <div className="banner">
    <div className="banner-title">
      <h2>
        <span className="bold"> Brainstorming </span> for desired perfect
        Usability
      </h2>
      <p className="discript">
        Our design projects are fresh and simple and will benefit your business
        greatly.Learn more about our work!
      </p>
      <div className="button">
        <Link to="/stats"> Views Stats </Link>
      </div>
    </div>
    <img className="banner-img" src={phoneImg} />
  </div>
);

export default Banner;
