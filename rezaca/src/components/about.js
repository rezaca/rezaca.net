import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <h2 className="About-title">About</h2>
          <p className="About-intro">
            Focused on creating amazing web experiences using React.
            <br />
            I prefer front end work but I'm also highly capable with Node.js,
            Express and SQL.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
