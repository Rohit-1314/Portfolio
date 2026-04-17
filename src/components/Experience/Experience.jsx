import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 3,
      title: 'Project Associate',
      company: 'CSIR-Central Electronics Engineering Research Institute (CEERI)',
      location: 'Jaipur, Rajasthan',
      duration: 'Dec 2025 - Present',
      type: 'Full-time',
      description: 'Working on innovative projects involving electronics design, web development, and IoT solutions with a focus on cybersecurity.',
      responsibilities: [
        'Developing IoT applications and smart electronics solutions',
        'Building secure web applications and backend systems',
        'Contributing to cybersecurity initiatives and protocols',
        'Designing and implementing electronics components',
        'Collaborating on research and development projects'
      ],
      technologies: ['Java', 'Web Development', 'Cybersecurity', 'Electronics Design', 'IoT', 'JavaScript', 'Backend Development'],
      logo: '/company-logo-placeholder.jpg'
    },
    {
      id: 1,
      title: 'Big Data Trainee',
      company: 'Samsung Innovation Center',
      location: 'Remote',
      duration: 'Aug 2024 - Oct 2024',
      type: 'Training',
      description: 'Worked with cutting-edge big data technologies and built real-time analytics dashboards.',
      responsibilities: [
        'Worked with Hadoop ecosystem for distributed data processing',
        'Implemented data visualization using Tableau for business insights',
        'Built real-time big data dashboards using Apache Spark',
        'Gained hands-on experience with Google Cloud Platform (GCP)',
        'Collaborated on data pipeline optimization projects'
      ],
      technologies: ['Hadoop', 'Apache Spark', 'Tableau', 'GCP', 'Big Data Analytics'],
      logo: '/company-logo-placeholder.jpg'
    },
    {
      id: 2,
      title: 'Java Programming Intern',
      company: 'NIELIT, Gorakhpur',
      location: 'Gorakhpur, UP',
      duration: 'July 2024 - Aug 2024',
      type: 'Internship',
      description: 'Developed responsive web applications and worked on backend systems using Java and Spring Boot.',
      responsibilities: [
        'Built responsive user interfaces using modern frontend technologies',
        'Optimized application performance and loading times',
        'Worked with Spring Boot backend systems and REST APIs',
        'Collaborated with senior developers on enterprise-level projects',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'HTML/CSS', 'JavaScript'],
      logo: '/company-logo-placeholder.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in the tech industry through internships and training programs
          </p>
        </motion.div>

        <div className="experience-timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div
            className="experience-list"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="marker-inner">
                    <FiBriefcase />
                  </div>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div className="company-info">
                      <div className="company-logo">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="logo-placeholder" style={{display: 'none'}}>
                          <FiBriefcase />
                        </div>
                      </div>
                      <div className="title-info">
                        <h3 className="job-title">{exp.title}</h3>
                        <h4 className="company-name">{exp.company}</h4>
                      </div>
                    </div>
                    <div className="job-type-badge">
                      {exp.type}
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="meta-item">
                      <FiCalendar />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="experience-description">
                    {exp.description}
                  </p>

                  <div className="responsibilities">
                    <h5>Key Responsibilities & Achievements:</h5>
                    <ul>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>
                          <FiArrowRight className="list-icon" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Months of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Organizations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Technologies Used</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
