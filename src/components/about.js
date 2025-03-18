import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <h2 className="About-title">About</h2>
          <p className="About-intro">
            Product leader specializing in AI and data solutions, with expertise in launching and scaling innovative products.
            <br />
            Skilled at bringing products from 0 to 1 by working closely with business and engineering teams to validate product-market fit.
            <br />
            Focused on leveraging AI technologies to process data and deliver significant business outcomes.
            <br />
            Track record of successfully launching disruptive products that redefine how technology is used in the industry.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
