import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Hack'Ndore",
      role: "Hack'Ndore PreFinalist",
      period: '',
      description:
        "Led a team to build a Digital Employee Management System for municipal workshops, streamlining attendance, payroll, and employee data workflows. The project improved operational efficiency and reduced manual work for workshop staff.",
      logo: 'briefcase'
    },
    {
      company: 'Social Summer of Code',
      role: 'Contributor',
      period: '',
      description:
        'Contributed to open-source projects under mentorship, improving code quality and collaborating with maintainers. Gained practical experience with collaborative workflows and code review best practices.',
      logo: 'code'
    },
    {
      company: 'Google Developer Groups (GDG)',
      role: 'GDG Core Team Member',
      period: '',
      description:
        'Organized tech events, workshops, and meetups to grow and support the local developer community. Helped onboard new members and coordinated speaker sessions.',
      logo: 'community'
    },
    {
      company: 'Unstop',
      role: 'Campus Ambassador',
      period: '',
      description:
        'Promoted hackathons and competitions, organized outreach, and connected students with opportunities and resources. Built partnerships that increased student participation significantly.',
      logo: 'megaphone'
    },
    {
      company: 'Google Gen AI',
      role: 'Program Participant',
      period: '',
      description:
        'Completed the Google Gen AI Cloud program and earned the Gen AI Cloud Badge for generative AI and cloud skills. Applied generative models to small projects and prototypes.',
      logo: 'brain'
    },
    {
      company: 'AWS Cloud Community Day',
      role: 'Participant',
      period: '',
      description:
        'Participated in community events to learn cloud technologies and network with industry experts. Explored cloud architectures and practical deployment patterns.',
      logo: 'cloud'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My <span className="title-bold">Experience</span>
        </motion.h2>

        <motion.div 
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <CompanyLogo type={exp.logo} />
                </div>
                <div className="experience-info">
                  <p className="experience-company">{exp.company}</p>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-period">{exp.period}</p>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CompanyLogo = ({ type }) => {
  const icons = {
    briefcase: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2 7a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM9 5h6v1H9V5zM4 9v7h16V9H4z" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8.7 6.3L3 12l5.7 5.7 1.4-1.4L6.8 12l3.3-3.3-1.4-1.4zM15.3 6.3l-1.4 1.4L17.2 12l-3.3 3.3 1.4 1.4L21 12l-5.7-5.7z"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-6 8v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6zM4 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
      </svg>
    ),
    megaphone: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2 11v2h3l7 4V7L5 11H2zm18-6v10a2 2 0 0 1-2 2h-1v-2h1V7h-1V5h1a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2c-1.1 0-2 .9-2 2v1H8a4 4 0 0 0-4 4v1H4v2h.1V18c0 1.1.9 2 2 2h11.8c1.1 0 2-.9 2-2v-4.9H20v-2h-.1V9a4 4 0 0 0-4-4h-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 18H6a4 4 0 0 1 0-8c.2 0 .5 0 .7.1A5 5 0 0 1 17 7a5 5 0 0 1 2.9 9.1c-.2.1-.4.1-.6.1z"/>
      </svg>
    ),
    default: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  };

  return icons[type] || icons.default;
};

export default Experience;
