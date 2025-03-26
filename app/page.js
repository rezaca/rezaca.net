"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
// Styles loaded from globals.css
import dynamic from 'next/dynamic';

// Dynamically import the ChatBot component to avoid SSR issues
const ChatBot = dynamic(
  () => import('../src/components/chatbot.js'),
  { ssr: false }
);

export default function Home() {
  // Add effect to adjust viewport for better mobile display
  useEffect(() => {
    // Set viewport meta tag for better mobile experience
    const metaViewport = document.querySelector('meta[name=viewport]');
    if (metaViewport) {
      metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
    }
    
    // Optional: scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Restore original viewport if it was modified
      if (metaViewport) {
        metaViewport.content = 'width=device-width, initial-scale=1.0';
      }
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
        <div className="home-container">
          <div className="App-header">
            <h1 className="App-title">Renato Zamudio Candia</h1>
            <p className="App-intro">Product Leader in AI. Business Strategist. Technology Innovator.</p>
          </div>
          
          <div className="chatbot-wrapper">
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
}