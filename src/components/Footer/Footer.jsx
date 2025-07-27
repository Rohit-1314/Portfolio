import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/Rohit-1314',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/rohit-kumar-a02564265',
      label: 'LinkedIn'
    },
    {
      icon: <FiMail />,
      href: 'mailto:rohit369id@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="brand-title">Rohit Kumar</h3>
            <p className="brand-subtitle">
              Aspiring Full-Stack Developer passionate about creating 
              innovative web solutions and solving real-world problems.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Technologies</h4>
            <ul className="tech-list">
              <li>React.js</li>
              <li>Java & Spring Boot</li>
              <li>JavaScript & TypeScript</li>
              <li>MySQL & MongoDB</li>
              <li>AWS & GCP</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Contact Info</h4>
            <div className="contact-info">
              <p>
                <strong>Email:</strong><br/>
                <a href="mailto:rohit369id@gmail.com">rohit369id@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong><br/>
                <a href="tel:+917905384124">+91 7905384124</a>
              </p>
              <p>
                <strong>Location:</strong><br/>
                Gorakhpur, UP, India
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Rohit Kumar. Made with <FiHeart className="heart-icon" /> using React.js
            </p>
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
