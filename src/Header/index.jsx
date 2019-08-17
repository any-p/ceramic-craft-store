import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <h1 className="company-name">ORGANICA</h1>
      </Link>
      <a
        className="App-link"
        href="tel: +7 981 956-81-25"
        target="_blank"
        rel="noopener noreferrer"
      >
        +7 981 956-81-25
      </a>
    </header>
  );
}

export default Header;
