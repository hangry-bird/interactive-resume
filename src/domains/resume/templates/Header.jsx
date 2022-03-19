import React, { useState } from 'react';
import styled from "styled-components";
import AOS from 'aos';

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

  position: ${(props) => props.position || ""};
  bottom: ${(props) => props.bottom || "0"};

  display: ${(props) => props.display || ""};
  flex-direction: ${(props) => props.flexDirection || ""};

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
            fontSize={"6vw"}
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
        bottom={"0vw"}>
        <div
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
            <StyledDiv
              display={"flex"}
              flexDirection={"column"}>
          <StyledSpan>Scroll Down</StyledSpan>
          <span className='arrow'></span>
            </StyledDiv>
        </div>
      </StyledDiv>
      
    </StyledWrap>
  );
}

export default Header;