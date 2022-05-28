import React, { useState, useLayoutEffect } from 'react';

// Custom Components
import { StyledDiv, StyledHeader1, StyledSpan } from 'src/components/styled-component/tag';

// AOS
import AOS from 'aos';

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Header = () => {

  AOS.init();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    // 오른쪽으로 사라지기
    gsap.to(".fade-out-right", {
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        start: "42% 30%",   // start, scroll-start
        end: "40% top",   // end, scroll-end
        scrub: 1,
      },
      x: 1500, duration: 4,
    });

    // 왼쪽으로 사라지기
    gsap.to(".fade-out-left", {
      scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        start: "42% 30%",   // start, scroll-start
        end: "40% top",   // end, scroll-end
        scrub: 1,
      },
      x: -1500, duration: 4,
    });

  })

  return (
    <div className="cover-wrap">
      <div className="text-top">
        <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500">
              <h1 className="fade-out-right">FRONT-END</h1>
          </div>
      </div>
      
      <div className="text-middle">
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="500">
          <h1 className="fade-out-left">DEVELOPER</h1>
        </div>
      </div>

      <div className="text-bottom">
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="500">
          <h1 className="fade-out-right">SEUNGHWA HAN</h1>
        </div>
      </div>

      <div className="scroll-wrap">

        <div
          data-aos="fade-up"
          data-aos-delay="1400"
          // data-aos-duration="800"
          data-aos-easing="ease-in-out"
        // data-aos-easing="ease"
        >
          <div className="scroll-area">

            <span className="scroll-text">Scroll Down</span>
            <span className="arrow"></span>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Header;