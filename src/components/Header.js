import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const navItems = [
  { name: 'Personal', href: '#home', sectionId: 'home' },
  { name: 'About Me', href: '#about', sectionId: 'about' },
  { name: 'Skills', href: '#skills', sectionId: 'skills' },
  { name: 'Experience', href: '#experience', sectionId: 'experience' },
  { name: 'Projects', href: '#projects', sectionId: 'projects' },
  { name: 'Contact Me', href: '#contact', sectionId: 'contact' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        threshold: 0.45,
        rootMargin: '-18% 0px -45% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previousValue) => !previousValue);
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="header-container">
        <a href="#home" className="logo" onClick={(event) => handleNavClick(event, '#home')}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="header-actions">
          <motion.a
            href="/resume.pdf"
            download
            className="resume-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume ↓
          </motion.a>

          <motion.button
            type="button"
            className={`menu-button ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <span />
            <span />
            <span />
          </motion.button>
        </div>
      </div>

      <motion.div
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={{
          closed: { opacity: 0, y: -12, pointerEvents: 'none' },
          open: { opacity: 1, y: 0, pointerEvents: 'auto' }
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
            onClick={(event) => handleNavClick(event, item.href)}
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;
