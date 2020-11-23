import React from 'react';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <header className="App-header">
      <p>HEADER</p>
    </header>
    <hr />
    {children}
    <footer className="App-footer">
      <p>FOOTER</p>
    </footer>
  </div>
);

export default Layout;
