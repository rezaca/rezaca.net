"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../src/App.css';
import dynamic from 'next/dynamic';
import AlternativeCV from '../alternative-cv';

// Dynamically import the curriculum component for better error handling
const Curriculum = dynamic(
  () => import('../../src/components/curriculum.js'),
  { 
    ssr: false,
    loading: () => <div className="cv-loading"><div className="cv-spinner"></div><p>Loading PDF viewer...</p></div>,
  }
);

export default function CurriculumPage() {
  const [pdfError, setPdfError] = useState(true); // Start with alternative CV by default
  
  // Add error handler to catch PDF loading failures
  useEffect(() => {
    const handleError = () => {
      console.log('PDF viewer error detected');
      setPdfError(true);
    };
    
    window.addEventListener('pdf-error', handleError);
    
    // Set a timeout to detect if the PDF viewer is stuck
    const timeout = setTimeout(() => {
      const pdfCanvasElement = document.querySelector('.react-pdf__Page__canvas');
      if (!pdfCanvasElement) {
        setPdfError(true);
      }
    }, 5000); // 5 seconds timeout
    
    return () => {
      window.removeEventListener('pdf-error', handleError);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="App">
      <div className="nav-container">
        <span className="Links">
          <Link href="/" style={{ textDecoration: 'none', color: 'gray' }}>
            Home
          </Link>
        </span>
        <span className="Links">
          <Link href="/about" style={{ textDecoration: 'none', color: 'gray' }}>
            About
          </Link>
        </span>
        <span className="Links">
          <Link href="/contact" style={{ textDecoration: 'none', color: 'gray' }}>
            Contact
          </Link>
        </span>
        <span className="Links">
          <Link href="/cv" style={{ textDecoration: 'none', color: 'gray' }}>
            CV
          </Link>
        </span>
      </div>
      
      <div className="content-container">
        <div className="CV-route">
          <AlternativeCV />
        </div>
      </div>
    </div>
  );
}