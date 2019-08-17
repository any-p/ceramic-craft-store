import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="app-header">
    <Link to="/" className="app-header__link">
      <h1 className="app-header__logo">Organica Art</h1>
    </Link>
    <a
      className="app-header__link"
      href="tel: +7 981 956-81-25"
      target="_blank"
      rel="noopener noreferrer"
    >
      +7 981 956-81-25
    </a>
  </header>
);

export default memo(Header);
