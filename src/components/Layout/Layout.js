import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <header className="App-header">
      <h1>
        <Link to={routes.MAIN}>AppCo</Link>
      </h1>
    </header>
    {children}
    <footer className="App-footer">
      <span>
        <Link to={routes.MAIN}>AppCo</Link>
      </span>
      <span>All rights reserved by ThemeTags</span>
      <span>Copyrights © 2019.</span>
    </footer>
  </div>
);

export default Layout;
