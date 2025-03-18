import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <h2 className="About-title">About</h2>
          <div className="About-section">
            <p className="About-intro">
              Product leader specializing in AI and data solutions, with
              expertise in launching and scaling innovative products.
            </p>
          </div>

          <div className="About-section">
            <h3 className="About-subtitle">Expertise</h3>
            <ul className="About-skills">
              <li>Bringing products from 0 to 1</li>
              <li>Validating product-market fit</li>
              <li>Leading cross-functional teams</li>
              <li>AI technologies and data solutions</li>
              <li>Disruptive product development</li>
            </ul>
          </div>

          <div className="About-section">
            <h3 className="About-subtitle">Focus</h3>
            <p className="About-text">
              Leveraging AI technologies to process data and deliver significant
              business outcomes through innovative product development.
            </p>
          </div>

          <div className="About-section">
            <h3 className="About-subtitle">Impact</h3>
            <p className="About-text">
              Track record of successfully launching disruptive products that
              redefine how technology is used in the industry.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
