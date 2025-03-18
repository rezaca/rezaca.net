"use client";

import React from 'react';
import Link from 'next/link';

export default function AlternativeCV() {
  return (
    <div className="fallback-cv-container">
      <h2>Resume Viewer</h2>
      <p>The PDF viewer is not available at the moment. You can download the resume directly.</p>
      
      <div className="fallback-actions">
        <a href="/resume.pdf" download className="cv-download-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
        
        <Link href="/" className="fallback-home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
}