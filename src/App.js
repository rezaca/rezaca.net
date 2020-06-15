import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Curriculum from './components/curriculum.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import PortfolioLink from './components/portfolio.js';

const Home = () => (
  <div>
    <div className="App-header">
      <h1 className="App-title">Renato Zamudio Candia</h1>
      <p className="App-intro">Product Obssesed. Business Strategist. Technologist.</p>
    </div>
    <About />
    <Contact />
  </div>
);

const CurriculumVitae = () => (
  <div className="CV-route">
    <Curriculum />
  </div>
);

const Portfolio = () => (
  <div className="Portfolio-route">
    <PortfolioLink />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <span className="Links">
            <Link to="/" style={{ textDecoration: 'none', color: 'gray' }}>
              Home
            </Link>
          </span>
          <span className="Links">
            <Link to="/CV" style={{ textDecoration: 'none', color: 'gray' }}>
              CV
            </Link>
          </span>
          <span className="Links">
            <Link
              to="/Portfolio"
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              Portfolio
            </Link>
          </span>
          <Route exact path="/" component={Home} />
          <Route path="/CV" component={CurriculumVitae} />
          <Route path="/Portfolio" component={Portfolio} />
        </div>
      </div>
    );
  }
}

export default App;
