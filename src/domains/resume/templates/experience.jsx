import React, { useState, useEffect, useLayoutEffect } from 'react';

const Experience = () => {

  return (
    <div className="experience">
      <div className="experience-area" data-aos="fade-up">
        <div className="experience-title">
          Experience
        </div>

        <div className="experience-content">
          <div className="baseline-area">
            <div className="baseline" />
            <div className="baseline-arrow" />
          </div>
        
          <div className="content-area">
            <div className="stninfotech" data-aos="flip-right">
              <div className="company-title">
                <h2 className="company-name">(주)에스티엔인포텍</h2>
                <span className="employment-period">2018. 11 ~ 재직중</span>
              </div>
              <span className="team">소프트웨어 개발팀</span>
              <span className="position">주임 연구원</span>
              <span className="duty">Full-stack Developer</span>
            </div>
          </div>
        
        </div>

      </div>
    </div>
  );
}

export default Experience;
