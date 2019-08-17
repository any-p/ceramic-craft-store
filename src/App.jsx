import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Header from './Header';
import MasterClass from './scenes/MasterClass';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/master-class/" component={MasterClass} />
      </div>
    </Router>
  );
}

export default App;
