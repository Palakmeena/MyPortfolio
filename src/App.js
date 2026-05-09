import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Home />
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <ContactMe />
        </main>
      </div>
    </Router>
  );
}

export default App;
