import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  const stats = [
    { number: "8.46", label: "CGPA" },
    { number: "5+", label: "Projects Built" },
    { number: "2+", label: "Internships" },
  ];

  const highlights = [
    {
      title: "Backend Thinker",
      description:
        "I enjoy designing systems from the ground up — API contracts, auth flows, database schemas. The architecture decisions excite me as much as the code itself.",
    },
    {
      title: "Full-Stack Capable",
      description:
        "Comfortable on both ends of the stack. I can own a feature end-to-end, from Spring Boot APIs to React interfaces, without losing sight of either side.",
    },
    {
      title: "Continuous Learner",
      description:
        "Currently deepening my understanding of system design and backend architecture. I learn by building real things, not just following tutorials.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h1 className="about-title">
              About <span className="title-bold">Me</span>
            </h1>
            <div className="title-underline"></div>
          </motion.div>

          <motion.div className="about-intro" variants={itemVariants}>
            <p className="intro-text">
              I'm a Computer Science graduate (B.Tech, Medi-Caps University '26,
              CGPA 8.46) who enjoys building things that are fast, clean, and
              actually solve problems. From designing REST APIs to crafting
              responsive interfaces, I care deeply about both the logic behind
              the system and the experience in front of it.
            </p>
            <p className="intro-text">
              My core stack revolves around Java, Spring Boot, MySQL on the
              backend, and React, Next.js on the frontend — grounded in strong
              fundamentals from DSA, DBMS, OS, and Software Engineering. I enjoy
              working close to the architecture — authentication flows, database
              design, API contracts — and turning complex requirements into
              simple, maintainable solutions.
            </p>
          </motion.div>

          <motion.div className="stats-grid" variants={itemVariants}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="highlights-section" variants={itemVariants}>
            <h2 className="section-subtitle">What Drives Me</h2>
            <div className="highlights-grid">
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  className="highlight-card"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="philosophy-section" variants={itemVariants}>
            <h2 className="section-subtitle">My Philosophy</h2>
            <blockquote className="philosophy-quote">
              "First, solve the problem. Then, write the code."
            </blockquote>
            <p className="philosophy-text">
              I believe good software starts with clarity — clear thinking,
              clean architecture, and code that doesn't need explaining.
              Whether it's a side project or a production system, I bring the
              same attention to structure, readability, and getting things
              right.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;