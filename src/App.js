import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/Blog';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className={`app ${dark ? 'dark' : 'light'}`}>
      <ScrollProgress />
      <Nav dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Blog />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
