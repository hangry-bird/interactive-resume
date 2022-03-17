//App.tsx
import React, { useState } from 'react';
// import { useParallax } from 'react-scroll-parallax';
import styled from "styled-components";
import AOS from 'aos';

// react scroll parallax
// react aos
// react card flip

const StyledWrap = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 100vh;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "0"};
  font-size: 1rem;
  text-align: center;

  position: ${(props) => props.position || "0"};
  bottom: ${(props) => props.bottom || "0"};
`;

const StyledHeader1 = styled.h1`
  font-size: ${(props) => props.fontSize || "4vw"};
  color: ${(props) => props.color || "rgba(0, 0, 0, 0.5)"};
  font-weight: ${(props) => props.fontWeight || ""};
  display: ${(props) => props.display || ""};
`;
const StyledSpan = styled.span`
  font-size: ${(props) => props.fontSize || "2vw"};
`;


const Header = () => {

  AOS.init();

  return (
    <StyledWrap>
      <StyledDiv>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000">
          <StyledHeader1
            fontWeight={"400"}>
            개발을 재밌어하는
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        marginTop={"10px"}>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="1000">
          <StyledHeader1
            fontWeight={"400"}>
            개발자
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        marginTop={"10px"}>
        <div
          data-aos="zoom-in"
          data-aos-delay="1500"
          data-aos-duration="1000">
          <StyledHeader1
            fontSize={"8vw"}
            fontWeight={"600"}
            display={"inline-block"}>
            한승화
          </StyledHeader1>
          <StyledHeader1
            display={"inline-block"}>
            입니다
          </StyledHeader1>
        </div>
      </StyledDiv>

      <StyledDiv
        position={"absolute"}
        bottom={"130px"}>
        <div
          data-aos="zoom-in"
          data-aos-delay="3000"
          data-aos-easing="ease-in-out">
          <StyledSpan>Scroll Down</StyledSpan>
        </div>
      </StyledDiv>
      
    </StyledWrap>
  );
}

export default Header;