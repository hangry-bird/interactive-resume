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

  useLayoutEffect (() => {
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
    <StyledDiv
      className="wrap"
      height={"100vh"}
      // display={"flex"}
      // flexDirection={"column"}
      justifyContent={"center"}
      // alignItems={"center"}
      display={"flex"}
      alignItems={"flex-end"}
      >

      <StyledDiv 
        position={"absolute"}
        top={"30%"}
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="500">
          <StyledHeader1
            className="fade-out-right">
            FRONT-END
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        position={"absolute"}
        top={"42%"}
        marginTop={"10px"}>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="500">
          <StyledHeader1
            className="fade-out-left">
            DEVELOPER
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        position={"absolute"}
        top={"56%"}
        marginTop={"10px"}>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="500">
          <StyledHeader1
            className="fade-out-right"
            display={"inline-block"}>
            SEUNGHWA HAN
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        position={"absolute"}
        bottom={"12%"}
        >
        <div
          data-aos="fade-up"
          data-aos-delay="1400"
          // data-aos-duration="800"
          data-aos-easing="ease-in-out"
          // data-aos-easing="ease"
          >
          <StyledDiv
            display={"flex"}
            flexDirection={"column"}>
            <StyledSpan fontSize={"30px"} color={"#fff"}>Scroll Down</StyledSpan>
            <span className='arrow'></span>
          </StyledDiv>
        </div>
      </StyledDiv>













    </StyledDiv>
  );
}

export default Header;