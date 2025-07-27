import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import './Contact.css';
import '../Hero/Hero.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'rohit369id@gmail.com',
      link: 'mailto:rohit369id@gmail.com'
    },
    // {
    //   icon: <FiPhone />,
    //   title: 'Phone',
    //   value: '+91 7905384124',
    //   link: 'tel:+917905384124'
    // },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Gorakhpur, Uttar Pradesh, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohit-kumar-a02564265',
      color: '#0077B5'
    },
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com/Rohit-1314',
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss opportunities, projects, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              {/* <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div> */}
              <div className="social-links">
                <a
                  href="https://github.com/Rohit-1314"
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="btn btn-outline social-btn"
                  className="btn btn-primary hero-btn"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rohit-kumar-a02564265"
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="btn btn-outline social-btn"
                  className="btn btn-primary hero-btn"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <h4><span>Available for new opportunities</span></h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FiMessageSquare className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FiMessageSquare className="input-icon textarea-icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Ready to Work Together?</h3>
          <p>
            I'm currently looking for new opportunities where I can contribute,
            learn, and grow. Let's build something amazing together!
          </p>
          <div className="cta-buttons">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a
              href="mailto:rohit369id@gmail.com"
              className="btn btn-secondary"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
