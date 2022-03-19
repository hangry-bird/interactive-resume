import React, { useState } from 'react';
import AOS from 'aos';

import { StyledDiv, StyledHeader1, StyledSpan } from 'src/components/styled-component/tag';

const Header = () => {
  AOS.init();
  
  return (
    <StyledDiv
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
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

    </StyledDiv>
  );
}

export default Header;