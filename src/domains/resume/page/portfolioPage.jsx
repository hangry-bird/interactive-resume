import React from 'react';

// Templates
import Header from '../templates/header'
import Contact from '../templates/contact';
import Experience from '../templates/experience';
import TechnicalSkills from '../templates/technicalSkills';
import Footer from '../templates/footer';

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