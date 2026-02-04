"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../src/App.css';
import About from '../../src/components/about.js';

export default function AboutPage() {
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
        <div className="page-container">
          <About />
        </div>
      </div>
    </div>
  );
}