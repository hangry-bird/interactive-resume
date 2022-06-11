import React from 'react';

// Templates
import Header from '../templates/header7'
import Contact from '../templates/contact7';
import Experience from '../templates/experience7';
import TechnicalSkills from '../templates/technicalSkills7';
import Footer from '../templates/footer7';

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