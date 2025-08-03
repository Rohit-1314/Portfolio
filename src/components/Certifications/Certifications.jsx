import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiExternalLink, FiStar } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: 'Java Programming Certification',
      issuer: 'NIELIT, Gorakhpur',
      date: 'August 2024',
      description: 'Comprehensive certification covering Java fundamentals, OOP concepts, and enterprise application development.',
      skills: ['Java', 'OOP', 'Spring Boot', 'REST APIs'],
      credentialUrl: 'https://drive.google.com/file/d/12Nn7UnOvRpO4ER92i0Aj_LeI2qFshX0_/view?usp=drive_link',
      featured: true,
    },
    // {
    //   id: 2,
    //   title: 'Google Cloud Platform (GCP) Certification',
    //   issuer: 'Google Cloud',
    //   date: 'September 2024',
    //   description: 'Certification in cloud computing fundamentals, GCP services, and cloud architecture best practices.',
    //   skills: ['GCP', 'Cloud Computing', 'Cloud Architecture', 'DevOps'],
    //   credentialUrl: '#',
    //   featured: true,
    // },
    {
      id: 3,
      title: 'Big Data Analytics Certification',
      issuer: 'Samsung Innovation Center',
      date: 'October 2024',
      description: 'Advanced certification in big data processing, analytics, and visualization using modern tools and frameworks.',
      skills: ['Hadoop', 'Apache Spark', 'Tableau', 'Data Analytics'],
      credentialUrl: 'https://drive.google.com/file/d/1Wii1cnBr289uosHh0fhHkU55O_X7jaLw/view?usp=drive_link',
      featured: true,
    },
    {
      id: 4,
      title: 'React Bootcamp Certification',
      issuer: 'Online Learning Platform',
      date: 'July 2024',
      description: 'Intensive bootcamp covering React.js fundamentals, hooks, state management, and modern development practices.',
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Frontend Development'],
      credentialUrl: 'https://drive.google.com/file/d/1x9HhpcOthW211xGIE7HFqE6LqhTUNT3o/view?usp=drive_link',
      featured: false,
    },
    {
      id: 5,
      title: 'Academic Excellence Award',
      issuer: 'Maharana Pratap Polytechnic',
      date: '2022',
      description: 'Recognition for outstanding academic performance in Electronics Engineering with 77.37% marks.',
      skills: ['Electronics', 'Academic Excellence', 'Problem Solving'],
      credentialUrl: '#',
      featured: false,
    },
  ];

  const achievements = [
    {
      icon: <FiAward />,
      title: 'Technical Certifications',
      count: '4+',
      description: 'Industry-recognized certifications',
    },
    {
      icon: <FiStar />,
      title: 'Academic Awards',
      count: '1',
      description: 'Excellence in academics',
    },
    {
      icon: <FiCalendar />,
      title: 'Recent Achievements',
      count: '2024',
      description: 'All certifications obtained',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and academic achievements that validate my expertise
          </p>
        </motion.div>

        <motion.div
          className="achievements-overview"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-info">
                <div className="achievement-count">{achievement.count}</div>
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-desc">{achievement.description}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className={`certification-card ${cert.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {cert.featured && (
                <div className="featured-badge">
                  <FiStar />
                  <span>Featured</span>
                </div>
              )}

              <div className="cert-header">
                <div className="cert-icon">
                  <FiAward />
                </div>
                <div className="cert-date">
                  <FiCalendar />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  <h5>Skills Covered:</h5>
                  <div className="skills-tags">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialUrl && (
                  <div className="cert-actions">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credential-link"
                    >
                      <FiExternalLink />
                      <span>View Credential</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Continuous Learning</h3>
          <p>
            I believe in continuous learning and staying updated with the latest technologies. 
            Currently pursuing additional certifications in cloud computing and advanced web development.
          </p>
          <div className="learning-goals">
            <div className="goal-item">
              <span className="goal-icon">🎯</span>
              <span>AWS Cloud Practitioner</span>
            </div>
            <div className="goal-item">
              <span className="goal-icon">⚛️</span>
              <span>Advanced React & Next.js</span>
            </div>
            <div className="goal-item">
              <span className="goal-icon">🐳</span>
              <span>Docker & Kubernetes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
