import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="Main">
    <div className="banner">
      <h2>Brainstorming for desired perfect Usability</h2>
      <p>
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <Link to="/stats">Views Stats</Link>
    </div>
    <div className="mainpart-wrap">
      <h3>Why small business owners love AppCo?</h3>
      <p>
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <ul className="service-list">
        <li>
          <h4>Clean Design</h4>
          <p>Increase sales by showing true dynamics of your website.</p>
        </li>
        <li>
          <h4>Secure Data</h4>
          <p>Build your online store’s trust using Social Proof & Urgency.</p>
        </li>
        <li>
          <h4>Retina Ready</h4>
          <p>
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </li>
      </ul>
      <div className="subscribe-form">
        <input></input>
        <button>Subscribe</button>
      </div>
    </div>
  </div>
);

export default Main;
