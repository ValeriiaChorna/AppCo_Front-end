import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
// import './Layout.scss';

const Layout = ({ children }) => (
  <div className="Layout">
    <header className="App-header">
      <h1>
        <Link to={routes.MAIN}> AppCo </Link>
      </h1>
    </header>
    {children}
    <footer className="App-footer">
      <h3>
        <Link to={routes.MAIN}> AppCo </Link>
      </h3>
      <span> All rights reserved by ThemeTags </span>
      <span> Copyrights© 2019. </span>
    </footer>
  </div>
);

export default Layout;
