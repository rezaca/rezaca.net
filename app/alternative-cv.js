"use client";

import React from 'react';
import '../src/components/alternative-cv.css';

const AlternativeCV = () => {
  return (
    <div className="alternative-cv">
      <h1 className="cv-heading">Curriculum Vitae</h1>
      
      <section className="cv-section">
        <h2>Renato Zamudio Candia</h2>
        <p className="cv-subtitle">Product Leader in AI • Business Strategist • Technology Innovator</p>
      </section>
      
      <section className="cv-section">
        <h3>Professional Experience</h3>
        <div className="experience">
          <div className="experience-header">
            <h4>Director of Product, AI Innovation</h4>
            <span className="experience-date">2022 - Present</span>
          </div>
          <p className="experience-description">
            Leading AI product strategy and implementation across organization. 
            Designed and launched innovative AI agents and LLM-based solutions.
          </p>
        </div>
        
        <div className="experience">
          <div className="experience-header">
            <h4>Senior Product Manager</h4>
            <span className="experience-date">2019 - 2022</span>
          </div>
          <p className="experience-description">
            Developed product strategy and roadmap for data platforms. 
            Scaled analytics solutions and implemented ML pipelines.
          </p>
        </div>
        
        <div className="experience">
          <div className="experience-header">
            <h4>Product Leader</h4>
            <span className="experience-date">2016 - 2019</span>
          </div>
          <p className="experience-description">
            Led cross-functional teams in developing and launching products from 0 to 1.
            Validated product-market fit through customer discovery and iteration.
          </p>
        </div>
      </section>
      
      <section className="cv-section">
        <h3>Core Skills</h3>
        <div className="skills-container">
          <div className="skill">AI Product Strategy</div>
          <div className="skill">LLM & Agent Architecture</div>
          <div className="skill">Data Platform Design</div>
          <div className="skill">Product Management</div>
          <div className="skill">Cross-functional Leadership</div>
          <div className="skill">Market Validation</div>
        </div>
      </section>
      
      <section className="cv-section">
        <h3>Contact</h3>
        <p className="contact-info">
          Email: renato@rezaca.net<br/>
          Phone: 919-803-9049
        </p>
      </section>
      
      <div className="cv-download">
        <a href="/Renato_Resume.pdf" download className="download-link">
          Download PDF Resume
        </a>
      </div>
    </div>
  );
};

export default AlternativeCV;