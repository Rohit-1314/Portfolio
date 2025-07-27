import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen, FiCode, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <FiCode />,
      number: '10+',
      label: 'Projects Built',
    },
    {
      icon: <FiBookOpen />,
      number: '4+',
      label: 'Technologies',
    },
    {
      icon: <FiAward />,
      number: '5+',
      label: 'Certifications',
    },
    {
      icon: <FiTrendingUp />,
      number: '7.5',
      label: 'CGPA',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-description">
              <p>
                Fresher Graduate <strong>B.Tech in Computer Science and Engineering</strong> from 
                Institute of Technology and Management, Gorakhpur, with hands-on experience in frontend and backend development, 
                cloud computing, and big data analytics. I'm driven to create high-performance 
                web applications that make an impact.
              </p>
              
              <p>
                My journey in technology started with a passion for problem-solving and has 
                evolved into expertise in modern web development frameworks. I enjoy working 
                on challenging projects that push the boundaries of what's possible with code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or learning about the latest trends in software development.
              </p>
            </div>

            <div className="education-section">
              <h3 className="education-title">Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <div className="education-header">
                    <h4>B.Tech in Computer Science & Engineering</h4>
                    <span className="education-year">2022 - 2025</span>
                    <span className="education-year">Completed</span>
                  </div>
                  <p className="education-school">Institute of Technology and Management, Gorakhpur</p>
                  <p className="education-grade">CGPA: 7.5/10</p>
                </div>
                
                <div className="education-item">
                  <div className="education-header">
                    <h4>Polytechnic Diploma in Electronics Engineering</h4>
                    <span className="education-year">2020 - 2022</span>
                    <span className="education-year">Completed</span>
                  </div>
                  <p className="education-school">Maharana Pratap Polytechnic, Gorakhpur</p>
                  <p className="education-grade">Percentage: 77.37%</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="interests-section">
              <h3 className="interests-title">Interests & Goals</h3>
              <div className="interests-list">
                <div className="interest-item">
                  <span className="interest-icon">🚀</span>
                  <span>Full-Stack Development</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">☁️</span>
                  <span>Cloud Computing</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">📊</span>
                  <span>Big Data Analytics</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🤝</span>
                  <span>Open Source Contribution</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
