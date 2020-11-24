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
      <div className="subscribe-form">
        <input /> <button> Subscribe </button>
      </div>
    </div>
    <CurveBottom className="curveBottImg" />
  </div>
);

export default Main;
