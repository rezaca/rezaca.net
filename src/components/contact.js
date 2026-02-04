import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Contact-header">
          <h2 className="Contact-title">Contact</h2>
          <div className="Contact-container">
            <div className="Contact-item">
              <div className="Contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="Contact-details">
                <p className="Contact-label">Email</p>
                <a href="mailto:renato@rezaca.net" className="Contact-value">
                  renato@rezaca.net
                </a>
              </div>
            </div>

            <div className="Contact-message">
              <p>
                Feel free to reach out about AI product opportunities,
                consulting, or speaking engagements.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
