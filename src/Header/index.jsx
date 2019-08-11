import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Header() {
  return (
    <header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
