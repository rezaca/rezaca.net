"use client";

import React from 'react';
import Link from 'next/link';
import '../../src/App.css';
import Curriculum from '../../src/components/curriculum.js';

export default function CurriculumPage() {
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
          <Curriculum />
        </div>
      </div>
    </div>
  );
}