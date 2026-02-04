'use client';

import React, { Component } from 'react';
import './curriculum.css';

class Curriculum extends Component {
  state = {
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    // Set loading to false after component is mounted
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);

    // Force iframe refresh if it doesn't load properly
    this.iframeTimeout = setTimeout(() => {
      const iframe = document.querySelector('.pdf-iframe');
      if (
        iframe &&
        iframe.contentDocument &&
        iframe.contentDocument.body &&
        iframe.contentDocument.body.innerHTML === ''
      ) {
        // If iframe is empty, refresh it
        const currentSrc = iframe.src;
        iframe.src = '';
        setTimeout(() => {
          iframe.src = currentSrc;
        }, 100);
      }
    }, 2000);
  }

  componentWillUnmount() {
    if (this.iframeTimeout) {
      clearTimeout(this.iframeTimeout);
    }
  }

  handleIframeError = () => {
    this.setState({ isLoading: false, hasError: true });
  };

  render() {
    const { isLoading, hasError } = this.state;
    const pdfUrl = '/resume.pdf';

    return (
      <div className="cv-container">
        <h1 className="page-title">Curriculum Vitae</h1>

        {isLoading && (
          <div className="cv-loading">
            <div className="cv-spinner"></div>
            <p>Loading resume...</p>
          </div>
        )}

        {hasError && (
          <div className="cv-error">
            <p>
              Unable to load the resume preview. Please use the buttons below to
              view or download.
            </p>
          </div>
        )}

        <div className="cv-document">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
            title="Resume"
            className="pdf-iframe"
            loading="lazy"
            onLoad={() => this.setState({ isLoading: false })}
            onError={this.handleIframeError}
          />
        </div>

        <div className="cv-controls">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-view-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            View in New Tab
          </a>

          <a href={pdfUrl} download className="cv-download-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default Curriculum;
