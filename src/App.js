import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Curriculum from './components/curriculum.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import ChatBot from './components/chatbot.js';

// Simple Home page with only name, skills, and ChatBot
const Home = () => (
  <div className="home-container">
    <div className="App-header">
      <h1 className="App-title">Renato Zamudio Candia</h1>
      <p className="App-intro">Product Leader in AI. Business Strategist. Technology Innovator.</p>
    </div>
    
    {/* ChatBot as main feature */}
    <div className="chatbot-wrapper">
      <ChatBot />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page-container">
    <About />
  </div>
);

const ContactPage = () => (
  <div className="page-container">
    <Contact />
  </div>
);

const CurriculumVitae = () => (
  <div className="CV-route">
    <Curriculum />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <span className="Links">
            <Link to="/" style={{ textDecoration: 'none', color: 'gray' }}>
              Home
            </Link>
          </span>
          <span className="Links">
            <Link to="/about" style={{ textDecoration: 'none', color: 'gray' }}>
              About
            </Link>
          </span>
          <span className="Links">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'gray' }}>
              Contact
            </Link>
          </span>
          <span className="Links">
            <Link to="/CV" style={{ textDecoration: 'none', color: 'gray' }}>
              CV
            </Link>
          </span>
        </div>
        
        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/CV" component={CurriculumVitae} />
        </div>
      </div>
    );
  }
}

export default App;
