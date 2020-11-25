import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const Stats = () => (
  <div className="statspage">
    <Navigation />
    <h3>Users statistics</h3>
    <Link to="/stats/1">Statistic by userId></Link>
  </div>
);

export default Stats;
