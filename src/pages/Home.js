import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const socialLinks = [
    { icon: 'github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'discord', url: 'https://discord.com', label: 'Discord' }
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
    <section className="home" id="home">
      <div className="home-container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-content" variants={itemVariants}>
            <h1 className="greeting">
              Hello I'am <span className="name">Palak Meena.</span>
            </h1>
            <h2 className="title">
              Software <span className="outline">Developer</span>
            </h2>
            <p className="subtitle">Based In <span className="location">India.</span></p>
            
            <motion.p 
              className="description"
              variants={itemVariants}
            >
              I’m a Computer Science engineering student specializing in backend development with Java. I enjoy designing scalable systems, building robust APIs, and working with cloud-based architectures to solve real-world problems.
            </motion.p>

            <motion.div 
              className="social-links"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="illustration">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Person sitting with laptop illustration */}
                <g className="person-group">
                  {/* Laptop */}
                  <rect x="180" y="280" width="140" height="90" rx="4" fill="#1A1A1A" stroke="#000" strokeWidth="2"/>
                  <rect x="185" y="285" width="130" height="70" fill="#4A90E2"/>
                  <circle cx="250" cy="305" r="3" fill="#fff"/>
                  <rect x="200" y="370" width="100" height="8" rx="4" fill="#1A1A1A"/>
                  
                  {/* Chair */}
                  <ellipse cx="250" cy="420" rx="60" ry="15" fill="#E5E5E5" stroke="#000" strokeWidth="2"/>
                  <rect x="235" y="380" width="30" height="40" fill="#E5E5E5" stroke="#000" strokeWidth="2"/>
                  
                  {/* Body */}
                  <path d="M 220 250 Q 250 280 280 250 L 280 350 Q 250 370 220 350 Z" fill="#000" stroke="#000" strokeWidth="2"/>
                  
                  {/* Arms */}
                  <path d="M 220 280 Q 200 300 190 320" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M 280 280 Q 300 300 310 320" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
                  
                  {/* Striped pattern on body */}
                  <line x1="230" y1="260" x2="235" y2="340" stroke="#fff" strokeWidth="2"/>
                  <line x1="240" y1="260" x2="245" y2="340" stroke="#fff" strokeWidth="2"/>
                  <line x1="250" y1="260" x2="255" y2="340" stroke="#fff" strokeWidth="2"/>
                  <line x1="260" y1="260" x2="265" y2="340" stroke="#fff" strokeWidth="2"/>
                  <line x1="270" y1="260" x2="275" y2="340" stroke="#fff" strokeWidth="2"/>
                  
                  {/* Head */}
                  <circle cx="250" cy="200" r="45" fill="#FFD6B8" stroke="#000" strokeWidth="2"/>
                  
                  {/* Hair */}
                  <path d="M 210 180 Q 250 150 290 180 L 290 200 Q 250 190 210 200 Z" fill="#000"/>
                  
                  {/* Face details */}
                  <circle cx="235" cy="200" r="3" fill="#000"/>
                  <circle cx="265" cy="200" r="3" fill="#000"/>
                  <path d="M 240 220 Q 250 225 260 220" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </g>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ type }) => {
  const icons = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    discord: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  };

  return icons[type] || null;
};

export default Home;
