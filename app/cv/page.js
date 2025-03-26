"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../src/App.css';
import dynamic from 'next/dynamic';

// Dynamically import the curriculum component for better error handling
const Curriculum = dynamic(
  () => import('../../src/components/curriculum.js'),
  { 
    ssr: false,
    loading: () => (
      <div className="cv-loading">
        <div className="cv-spinner"></div>
        <p>Loading PDF viewer...</p>
      </div>
    ),
  }
);

export default function CurriculumPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Set loading state to false after component is mounted
    setIsLoading(false);
    
    // Add a delayed check to see if the PDF viewer actually loaded
    const timer = setTimeout(() => {
      const canvas = document.querySelector('.react-pdf__Page__canvas');
      if (!canvas) {
        console.log('No PDF canvas detected, reloading component');
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 100); // Force a component reload
      }
    }, 5000);
    
    return () => clearTimeout(timer);
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
          {!isLoading && <Curriculum />}
          {isLoading && (
            <div className="cv-loading">
              <div className="cv-spinner"></div>
              <p>Loading PDF viewer...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}