import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BookSwap – Community Book Lending Platform',
      description: 'Book-sharing platform with geolocation search to find books within 1-10 km radius. Features complete borrow lifecycle with request approval, status tracking, and automated return management.',
      technologies: ['Next.js', 'React', 'Node.js', 'Express'],
      icon: 'book',
      links: {
        github: 'https://github.com/Palakmeena/Bookshare-frontend',
        live: 'https://github.com/Palakmeena/Bookshare-frontend'
      }
    },
    {
      id: 2,
      title: 'Interview Process Tracking System',
      description: 'HR recruitment app for managing job descriptions, candidates, and interview rounds (Screening, L1, L2, HR). Features JWT authentication with role-based access control for HR, Panel, and Candidates.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JWT'],
      icon: 'tasks',
      links: {
        github: 'https://github.com/Palakmeena/nucleusteq-training/tree/main/Capstone_InterviewTracker',
        live: 'https://github.com/Palakmeena/nucleusteq-training/tree/main/Capstone_InterviewTracker'
      }
    },
    {
      id: 3,
      title: 'Money Manager – Personal Finance Tracker',
      description: 'Finance tracking application with secure JWT authentication. Dashboard displays monthly summaries with category-wise expense breakdowns, search, filter, and category grouping features.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      icon: 'chart',
      links: {
        github: 'https://github.com/Palakmeena/money-manager-frontend',
        live: 'https://heartfelt-cheesecake-286eca.netlify.app/home'
      }
    },
    {
      id: 4,
      title: 'Product Inventory Management System',
      description: 'Comprehensive inventory management system for product tracking, supplier management, purchase orders, and stock transactions with role-based access control and real-time monitoring.',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
      icon: 'warehouse',
      links: {
        github: 'https://github.com/cuzitsvicky/Product-Inventory-Management',
        live: 'https://github.com/cuzitsvicky/Product-Inventory-Management'
      }
    },
    {
      id: 5,
      title: 'Upskillr – Tech Resource Platform',
      description: 'Resource platform providing access to hackathons, conferences, communities, and technology-specific notes. Helps students and developers discover learning opportunities and community resources.',
      technologies: ['React', 'Spring Boot', 'MongoDB', 'Node.js'],
      icon: 'learning',
      links: {
        github: 'https://github.com/Palakmeena/Upskillr',
        live: 'https://upskillr.vercel.app/'
      }
    },
    {
      id: 6,
      title: 'Agri Mitra – Farmer Empowerment Platform',
      description: 'Web application designed to empower farmers with tools and information for crop yield optimization. Features include real-time pesticide recommendations via AI, mandi price checking for market decisions, and a farmer forum for expert discussions.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
      icon: 'farm',
      links: {
        github: 'https://github.com/Doinggithub14/AgriMitra',
        live: 'https://agri-mitra-rosy.vercel.app/'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My <span className="title-bold">Projects</span>
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image-wrapper">
                <div className="project-icon">
                  <ProjectIcon type={project.icon} />
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.links.github} className="project-link github-link">
                    GitHub
                  </a>
                  <a href={project.links.live} className="project-link live-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectIcon = ({ type }) => {
  const icons = {
    book: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 12h32c1.1 0 2 .9 2 2v22c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12v28" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18h8M14 26h8M14 34h8M28 18h8M28 26h8M28 34h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tasks: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="10" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2" />
        <path d="M16 22l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 30h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 32v-8M18 32v-12M24 32v-6M30 32v-10M36 32v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 24L24 16L36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    warehouse: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 20h32l-4 16H12l-4-16Z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20V12h32v8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12v24M16 20v16M32 20v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12h24L24 6l-12 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    learning: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l-16 8v12c0 8 16 12 16 12s16-4 16-12V16l-16-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 24v8M20 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    farm: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 28h32v10H8z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18v10M20 16v12M28 18v10M36 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 12l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  };

  return icons[type] || null;
};

export default Projects;
