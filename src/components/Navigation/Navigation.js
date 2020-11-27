import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Navigation = ({ location }) => {
  const currentLocation = location.match.path;
  const isPageStat = currentLocation === routes.STATS;

  return (
    <div className="navigation">
      <p className="navigation-item">
        <Link to={routes.MAIN}> Main page </Link>
      </p>
      <p className={`navigation-item ${isPageStat && 'active'}`}>
        <Link to={routes.STATS}> User statistic </Link>
      </p>
      {!isPageStat && (
        <p className="navigation-item active">
          <Link to={routes.CHARTS}> User </Link>
        </p>
      )}
    </div>
  );
};

export default Navigation;
