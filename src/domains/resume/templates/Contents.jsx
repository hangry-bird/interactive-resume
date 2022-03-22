import React from 'react';
import AOS from 'aos';
import { StyledDiv, StyledHeader1, StyledSpan } from 'src/components/styled-component/tag';

const Contents = () => {

  AOS.init();

  

  return (
    <StyledDiv
      height={"100vh"}>

{/* <StyledDiv
          className="box2"
          width={"200px"}
          height={"200px"}
          margin={"12vh"}
          border={"1px solid red"}
          // data-aos="fade-right"
          >



        <StyledDiv
          className="box2-1"
          width={"200px"}
          height={"200px"}
          margin={"12vh"}
          border={"1px solid red"}
          // data-aos="fade-right"
          ></StyledDiv>

<StyledDiv
          className="box2-2"
          width={"200px"}
          height={"200px"}
          margin={"12vh"}
          border={"1px solid red"}
          // data-aos="fade-right"
          ></StyledDiv>
        </StyledDiv> */}

        {/* <div data-aos="fade-right">
        </div> */}
    </StyledDiv>
  );
}

export default Contents;