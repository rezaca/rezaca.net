import React, { Component } from 'react';
import Civi from '../civi.png';

class PortfolioLink extends Component {
  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">Civi-Disc</h1>
        <p className="App-intro">
          Winner of best project at UNC Charlotte's Full-Stack Web Development
          Bootcamp.
        </p>
        <a href="https://civi-disc.herokuapp.com/about">
          <img src={Civi} width="50%" height="" />
        </a>
      </div>
    );
  }
}

export default PortfolioLink;
