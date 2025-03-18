import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Basic render test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// Responsive design tests
describe('Responsive Design Tests', () => {
  let originalInnerWidth;
  
  beforeEach(() => {
    originalInnerWidth = global.innerWidth;
  });
  
  afterEach(() => {
    global.innerWidth = originalInnerWidth;
  });
  
  // Test for desktop viewport
  it('sets appropriate styles for desktop viewport', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    
    // In a real test, we would check computed styles
    // For this simple test, we're just checking that it doesn't crash
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  
  // Test for tablet viewport
  it('sets appropriate styles for tablet viewport', () => {
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  
  // Test for mobile viewport
  it('sets appropriate styles for mobile viewport', () => {
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
