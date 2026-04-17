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
  FiMessageSquare,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle
} from 'react-icons/fi';
import './Contact.css';
import '../Hero/Hero.css';
import ContactAPI from '../../../api/contact';

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
  const [submitStatus, setSubmitStatus] = useState({
    type: '', // 'success', 'error', 'info'
    message: '',
    show: false
  });

  // Clear status message after 5 seconds
  const clearStatusMessage = () => {
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '', show: false });
    }, 3000);
  };

  // Show status message
  const showStatusMessage = (type, message) => {
    setSubmitStatus({ type, message, show: true });
    clearStatusMessage();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Show "sending" message
    showStatusMessage('info', 'Sending your message...');
    
    try {
      // Attempt to submit via Google Scripts API
      const result = await ContactAPI.submitForm(formData);
      
      if (result.success) {
        // Success: clear form and show success message
        setFormData({ name: '', email: '', subject: '', message: '' });
        showStatusMessage('success', 'Your message has been sent successfully! I\'ll get back to you soon.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Handle different types of errors
      if (error.message.includes('required') || 
          error.message.includes('valid') || 
          error.message.includes('characters')) {
        // Validation errors
        showStatusMessage('error', error.message);
      } else {
        // Network or server errors - offer fallback
        showStatusMessage('error', 'Unable to send message through the contact form. Redirecting to email...');
        
        // Fallback to mailto after a short delay
        setTimeout(() => {
          try {
            const mailtoLink = ContactAPI.createMailtoLink(formData);
            window.location.href = mailtoLink;
            setFormData({ name: '', email: '', subject: '', message: '' });
          } catch (mailtoError) {
            showStatusMessage('error', 'Please send your message directly to rohit369id@gmail.com');
          }
        }, 2000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'rohit369id@gmail.com',
      link: 'mailto:rohit369id@gmail.com',
    },
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
                    placeholder="Your Message must be at least 10 characters long"
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

            {/* Status Message */}
            {submitStatus.show && (
              <motion.div
                className={`status-message ${submitStatus.type}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="status-icon">
                  {submitStatus.type === 'success' && <FiCheckCircle />}
                  {submitStatus.type === 'error' && <FiXCircle />}
                  {submitStatus.type === 'info' && <FiAlertCircle />}
                </div>
                <span>{submitStatus.message}</span>
              </motion.div>
            )}
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
            <button
              className="btn btn-primary hero-btn"
              onClick={() => {
                const downloadUrl = `${window.location.origin}/resume.pdf`;
                fetch(downloadUrl)
                  .then(response => response.blob())
                  .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Rohit_Kumar_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(link);
                  })
                  .catch(error => {
                    console.error('Download failed:', error);
                    alert('Failed to download resume. Please try again.');
                  });
              }}
            >
              Download Resume
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const mailtoUrl = "mailto:rohit369id@gmail.com?subject=Interested%20in%20Working%20Together&body=Hi%20Rohit%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities.%0A%0ABest%20regards";
                window.location.href = mailtoUrl;
              }}
            >
              Send Email
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
