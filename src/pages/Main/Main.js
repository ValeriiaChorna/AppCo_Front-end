import React from 'react';
import Banner from '../../components/Banner';
import ServiceList from '../../components/ServiceList';
import { ReactComponent as Curve } from '../../img/curve-top.svg';

const Main = () => (
  <div className="mainpage">
    <Curve className="curveTopImg" />
    <Banner />
    <div className="mainpart-wrap">
      <h3> Why small business owners love AppCo ? </h3>{' '}
      <p>
        Our design projects are fresh and simple and will benefit your business
        greatly.Learn more about our work!
      </p>{' '}
      <ServiceList />
      <div className="subscribe-form">
        <input /> <button> Subscribe </button>{' '}
      </div>{' '}
    </div>{' '}
  </div>
);

export default Main;
