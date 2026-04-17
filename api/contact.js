// Google Apps Script API endpoint configuration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylz6XugtY4cP4tfWMv9qkY0qrOJM4IVIvFReEzdvxr8ZuXFiiycWuD8OH7_C_rU0PJ/exec';

// Contact API functions for client-side use
const ContactAPI = {
  // Submit contact form data to Google Scripts
  async submitForm(formData) {
    try {
      // Validate required fields
      const { name, email, subject, message } = formData;
      
      if (!name || !email || !subject || !message) {
        throw new Error('All fields are required.');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Name validation (minimum 2 characters)
      if (name.trim().length < 2) {
        throw new Error('Name must be at least 2 characters long.');
      }

      // Subject validation (minimum 3 characters)
      if (subject.trim().length < 3) {
        throw new Error('Subject must be at least 3 characters long.');
      }

      // Message validation (minimum 10 characters)
      if (message.trim().length < 10) {
        throw new Error('Message must be at least 10 characters long.');
      }

      // Prepare data for Google Scripts
      const submissionData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        source: 'Portfolio Website'
      };

      // Send to Google Scripts
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Since we're using no-cors mode, we can't read the response
      // But if no error is thrown, we assume success
      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      
      // Return appropriate error messages
      if (error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection and try again.');
      } else if (error.message.includes('required') || 
                 error.message.includes('valid') || 
                 error.message.includes('characters')) {
        throw error; // Validation errors
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    }
  },

  // Fallback mailto function
  createMailtoLink(formData) {
    const { name, email, subject, message } = formData;
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    return `mailto:rohit369id@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
  }
};

export default ContactAPI;
