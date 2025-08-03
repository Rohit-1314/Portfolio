import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Rohit Kumar</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Aspiring Full-Stack Developer
              <br />
              Java | React | Spring Boot
            </h2>
            
            <p className="hero-description">
              Computer Science Graduate passionate about building scalable web applications
              and solving real-world problems using clean code and modern frameworks.
            </p>
            
            <div className="hero-buttons">
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary hero-btn"
              >
                <FiDownload />
                Download Resume
              </a>
              
              <div className="social-links">
                <a
                  href="https://github.com/Rohit-1314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline social-btn"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                  GitHub
                </a>
                
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-a02564265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <img src="@/Assets/Rohit-img.png" alt="Rohit Kumar" className="avatar-image" />
              </div>
              <div className="avatar-glow"></div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element tech-icon react">React</div>
              <div className="floating-element tech-icon java">Java</div>
              <div className="floating-element tech-icon spring">Spring</div>
              <div className="floating-element tech-icon js">JS</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button onClick={scrollToAbout} className="scroll-btn" aria-label="Scroll to About section">
            <FiArrowDown />
            <span>Scroll Down</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
