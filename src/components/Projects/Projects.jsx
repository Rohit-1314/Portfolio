import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Real-Time Facial Expression Detection and Analysis',
      description: 'Built a real-time facial expression monitoring system with health analytics using computer vision and machine learning techniques.',
      image: '/project-placeholder.jpg',
      technologies: ['React.js', 'Vite', 'OpenCV', 'TensorFlow'],
      githubUrl: 'https://github.com/Rohit-1314/REAL-TIME-FACIAL-EXPRESSION-DETECTION',
      liveUrl: null,
      featured: true,
      category: 'Machine Learning',
    },
    {
      id: 2,
      title: 'Chatbot Application for College',
      description: 'Rule-based chatbot for college queries using PyCharm, with intelligent logic for intent handling and comprehensive error management.',
      image: '/project-placeholder.jpg',
      technologies: ['Python', 'NLP', 'PyCharm'],
      githubUrl: 'https://github.com/Rohit-1314/Chatbot-Application-for-college',
      liveUrl: null,
      featured: false,
      category: 'AI/ML',
    },
    {
      id: 3,
      title: 'IoT Smart Home Automation System',
      description: 'Developed a smart web interface to control home devices with real-time data visualization from various sensors.',
      image: '/project-placeholder.jpg',
      technologies: ['React.js', 'NodeMCU', 'IoT Sensors', 'Arduino'],
      githubUrl: 'https://github.com/Rohit-1314/IoT-Home-Automation-System',
      liveUrl: null,
      featured: true,
      category: 'IoT',
    },
    {
      id: 4,
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '/project-placeholder.jpg',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
      githubUrl: '#',
      liveUrl: null,
      featured: false,
      category: 'Web Development',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and historical data visualization.',
      image: '/project-placeholder.jpg',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      githubUrl: '#',
      liveUrl: null,
      featured: false,
      category: 'Web Development',
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      image: '/project-placeholder.jpg',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: null,
      featured: false,
      category: 'Web Development',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <FiStar />
                  <span>Featured</span>
                </div>
              )}

              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{display: 'flex'}}>
                  <FiCode size={48} />
                </div>
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        aria-label="View GitHub Repository"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        aria-label="View Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <FiExternalLink />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a
            href="https://github.com/Rohit-1314"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
