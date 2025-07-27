import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiLayers, 
  FiDatabase, 
  FiServer, 
  FiCloud, 
  FiTool 
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 85 },
      ],
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'REST APIs', level: 75 },
        { name: 'Python', level: 70 },
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      icon: <FiCloud />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'GCP', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
      ],
    },
    {
      icon: <FiTool />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Eclipse', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'Tableau', level: 70 },
        { name: 'PyCharm', level: 75 },
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-content">
            <div className="summary-item">
              <div className="summary-icon">
                <FiLayers />
              </div>
              <div className="summary-text">
                <h4>Full-Stack Development</h4>
                <p>End-to-end web application development with modern frameworks</p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <FiCloud />
              </div>
              <div className="summary-text">
                <h4>Cloud Computing</h4>
                <p>Deployment and scaling applications on AWS and Google Cloud Platform</p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">
                <FiDatabase />
              </div>
              <div className="summary-text">
                <h4>Data Management</h4>
                <p>Working with both SQL and NoSQL databases for optimal data storage</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
