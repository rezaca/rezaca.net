"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Styles loaded from globals.css
import dynamic from 'next/dynamic';

// Dynamically import the ChatBot component to avoid SSR issues
const ChatBot = dynamic(
  () => import('../src/components/chatbot.js'),
  { ssr: false }
);

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="App">
      <nav className="nav-container" aria-label="Main navigation">
        <span className="Links">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
            Home
          </Link>
        </span>
        <span className="Links">
          <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
            About
          </Link>
        </span>
        <span className="Links">
          <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
            Contact
          </Link>
        </span>
        <span className="Links">
          <Link href="/cv" aria-current={pathname === '/cv' ? 'page' : undefined}>
            CV
          </Link>
        </span>
      </nav>
      
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