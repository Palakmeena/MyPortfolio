import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

// Initialize EmailJS (IMPORTANT: Replace with your actual public key)
// Get your Public Key from: https://dashboard.emailjs.com/admin/account
const EMAILJS_SERVICE_ID = 'service_vrqibfh';
const EMAILJS_TEMPLATE_ID = 'template_wjjsj7f';
const EMAILJS_PUBLIC_KEY = 'Vp6jRexnQG4KzeSJu';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    try {
      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'palakmeena14@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Clear success message after 4 seconds
        setTimeout(() => setFormStatus(''), 4000);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact directly at palakmeena14@gmail.com');
      setTimeout(() => {
        setFormStatus('');
        setErrorMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'palakmeena14@gmail.com',
      link: 'mailto:palakmeena14@gmail.com'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 ',
      link: 'tel:+919876543210'
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Indore, India',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h1 className="contact-title">
              Get In <span className="title-bold">Touch</span>
            </h1>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hello? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="contact-main">
            <motion.div className="contact-info-section" variants={itemVariants}>
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="contact-info-item"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="info-icon">
                      <ContactIcon type={info.icon} />
                    </div>
                    <div className="info-content">
                      <p className="info-label">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="info-value">
                          {info.value}
                        </a>
                      ) : (
                        <p className="info-value">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-section">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-links">
                  <a href="https://github.com/Palakmeena" target="_blank" rel="noopener noreferrer" className="social-link">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/palak-meena-b01104245/" target="_blank" rel="noopener noreferrer" className="social-link">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-section" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>

                {formStatus === 'success' && (
                  <motion.p
                    className="form-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}

                {formStatus === 'error' && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✗ {errorMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>

          <motion.footer className="contact-footer" variants={itemVariants}>
            <div className="footer-mark" aria-hidden="true">
              <FooterIcon />
            </div>
            <div className="footer-copy">
              <p className="footer-title">Made with love by Palak</p>
              <p className="footer-subtitle">Built to stay clean, simple, and easy to reach.</p>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

const FooterIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-6.5-4.35-9.2-8.27C-0.13 9.14 2.35 4.5 6.8 4.5c2.02 0 3.44 1.02 4.2 2.13.76-1.11 2.18-2.13 4.2-2.13 4.45 0 6.93 4.64 4 8.23C18.5 16.65 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ContactIcon = ({ type }) => {
  const icons = {
    email: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  };

  return icons[type];
};

export default ContactMe;
