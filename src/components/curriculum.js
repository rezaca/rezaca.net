'use client';

import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './curriculum.css';

// Define PDF.js worker URL outside the component
const PDFJS_CDN_URL = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

// Dynamic imports must be used outside of the component in Next.js
const PDFViewer = dynamic(
  () =>
    import('react-pdf').then((mod) => {
      // Needed to ensure PDF.js works properly with Webpack
      const { pdfjs } = mod;
      // Configure the worker source
      pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_CDN_URL;
      return mod;
    }),
  { ssr: false },
);

class Curriculum extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    scale: 1.0,
    isLoading: true,
    error: false,
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({
      numPages,
      isLoading: false,
    });
    // Force a re-render if the canvas doesn't appear
    setTimeout(() => {
      if (!document.querySelector('.react-pdf__Page__canvas')) {
        this.forceUpdate();
      } else {
        console.log('PDF canvas rendered successfully');
      }
    }, 500);
  };

  onDocumentError = (error) => {
    console.error('PDF load error:', error);
    this.setState({
      error: true,
      isLoading: false,
    });
    // Dispatch an error event to the parent component
    window.dispatchEvent(new CustomEvent('pdf-error', { detail: error }));
  };

  nextPage = () => {
    const { pageNumber, numPages } = this.state;
    if (pageNumber < numPages) {
      this.setState({ pageNumber: pageNumber + 1 });
    }
  };

  prevPage = () => {
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    }
  };

  zoomIn = () => {
    this.setState((prevState) => ({ scale: prevState.scale + 0.1 }));
  };

  zoomOut = () => {
    this.setState((prevState) => ({
      scale: Math.max(0.5, prevState.scale - 0.1),
    }));
  };

  componentDidMount() {
    // Ensure we have access to the correct PDF URL
    this.pdfUrl = '/resume.pdf';
  }

  render() {
    const { pageNumber, numPages, scale, isLoading, error } = this.state;

    if (!PDFViewer) {
      return <div className="cv-loading">Loading PDF viewer...</div>;
    }

    const { Document, Page } = PDFViewer;

    if (!Document || !Page) {
      return <div className="cv-loading">Loading PDF components...</div>;
    }

    return (
      <div className="cv-container">
        {isLoading && (
          <div className="cv-loading">
            <div className="cv-spinner"></div>
            <p>Loading resume...</p>
          </div>
        )}

        {error && (
          <div className="cv-error">
            <p>Failed to load the resume. Please try again later.</p>
            <a href={this.pdfUrl} download className="cv-download-button">
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
              Download Resume
            </a>
          </div>
        )}

        <div className="cv-document">
          <Document
            file={this.pdfUrl}
            onLoadSuccess={this.onDocumentLoad}
            onLoadError={this.onDocumentError}
            loading=""
            className="pdf-document"
            options={{
              cMapUrl: 'cmaps/',
              standardFontDataUrl: 'standard_fonts/',
            }}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="pdf-page"
              renderTextLayer={false}
              renderAnnotationLayer={false}
              canvasBackground="white"
            />
          </Document>
        </div>

        {numPages > 0 && (
          <div className="cv-controls">
            <div className="cv-pagination">
              <button
                onClick={this.prevPage}
                disabled={pageNumber <= 1}
                className="cv-button"
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span className="cv-page-info">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={this.nextPage}
                disabled={pageNumber >= numPages}
                className="cv-button"
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="cv-zoom">
              <button onClick={this.zoomOut} className="cv-button">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              <span className="cv-zoom-level">{Math.round(scale * 100)}%</span>
              <button onClick={this.zoomIn} className="cv-button">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
            </div>

            <a href={this.pdfUrl} download className="cv-download-button">
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
        )}
      </div>
    );
  }
}

export default Curriculum;
