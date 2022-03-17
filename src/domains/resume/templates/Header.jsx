//App.tsx
import React, { useState } from 'react';
// import { useParallax } from 'react-scroll-parallax';
import styled from "styled-components";
import AOS from 'aos';

// react scroll parallax
// react aos
// react card flip

const StyledDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 100vh;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledHeader1 = styled.h1`
  font-size: ${(props) => props.fontSize || "10vw"};
`;
const StyledHeader2 = styled.h2`
  font-size: ${(props) => props.fontSize || "8vw"};
`;


const Header = () => {

  AOS.init();

  return (
    <StyledDiv>
          <StyledDiv>
      <div 
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <StyledHeader1
          fontSize={"8vw"}>
          개발을 재밌어하는
        </StyledHeader1>
      </div>
      </StyledDiv>
      <StyledDiv>
      <div 
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <StyledHeader1
          fontSize={"8vw"}>
          개발자
        </StyledHeader1>
      </div>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Header;