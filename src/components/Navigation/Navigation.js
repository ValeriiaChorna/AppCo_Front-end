import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Navigation = ({ active = false }) => (
  <div className="navigation">
    <p className="navigation-item">
      <Link to={routes.MAIN}> Main page </Link>
    </p>
    <p className="navigation-item active">
      <Link to={routes.STATS}> User statistic </Link>
    </p>
    <p className="navigation-item">
      <Link to={routes.CHARTS}> User </Link>
    </p>
  </div>
);

export default Navigation;
