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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="Contact-details">
                <p className="Contact-label">Phone</p>
                <a href="tel:9198039049" className="Contact-value">
                  919-803-9049
                </a>
              </div>
            </div>

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
