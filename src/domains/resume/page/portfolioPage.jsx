import React from 'react';

// Templates
import Header from '../templates/Header'
import Contact from '../templates/Contact';
import Experience from '../templates/Experience';
import TechnicalSkills from '../templates/TechnicalSkills';
import Footer from '../templates/Footer';

// react scroll parallax
// react aos
// react card flip

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Header />
      <Contact />
      <Experience />
      <TechnicalSkills />
      <Footer />
    </div>
  );
}

export default PortfolioPage;