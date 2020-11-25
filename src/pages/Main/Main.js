import React from 'react';
import Banner from '../../components/Banner';
import ServiceList from '../../components/ServiceList';
import { ReactComponent as CurveTop } from '../../img/curve-top.svg';
import { ReactComponent as CurveBottom } from '../../img/curve-bottom.svg';

const Main = () => (
  <div className="mainpage">
    <CurveTop className="curveTopImg" />
    <Banner />
    <div className="mainpart-wrap">
      <div className="service-title">
        <h3>
          Why <span className="bold"> small business owners love </span> AppCo ?
        </h3>
        <p className="discript">
          Our design projects are fresh and simple and will benefit your
          business greatly.Learn more about our work!
        </p>
      </div>
      <ServiceList />
      <form className="subscribe-form">
        <input type="text" placeholder="Enter your email..." />
        <button className="button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
    <CurveBottom className="curveBottImg" />
  </div>
);

export default Main;
