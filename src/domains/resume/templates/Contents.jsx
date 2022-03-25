import React from 'react';
import AOS from 'aos';
import { StyledDiv, StyledHeader1, StyledSpan } from 'src/components/styled-component/tag';

const Contents = () => {

  AOS.init();


  return (
    <StyledDiv
      height={"100vh"}
    >

      <StyledDiv
        data-aos="fade-right"
        data-aos-duration="500"
        width={"60vw"}
        height={"700px"}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"36px"}
        backgroundColor={"#eee"}
        margin={"0 80px"}
      >
        {/* 상단 Contact */}
        <StyledDiv
          width={"100%"}
          height={"50%"}
        >

        </StyledDiv>

        {/* 하단 설명 문구 */}
        <StyledDiv
          width={"auto"}
          height={"50%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          textAlign={"left"}
          padding={"10px 12%"}
          fontSize={"20px"}
        >
          {/* <StyledDiv> */}
          <p>심도 있는 <StyledSpan fontSize={"22px"} fontWeight={"600"} color={"#6388FF"}>Front-End</StyledSpan> 개발자가 되고자 노력하는 Web 개발자 입니다.</p>

          <span>항상 내가 아닌 <StyledSpan fontSize={"22px"} fontWeight={"600"} color={"#6388FF"}>'사용자의 입장'</StyledSpan>에서 생각하려고 노력하며 좋은 UX를 구현하고자 합니다.</span>

          <span>크고 작은 프로젝트를 진행하면서 팀원들과 <StyledSpan fontSize={"22px"} fontWeight={"600"} color={"#6388FF"}>의견을 교환하며 소통하는 것</StyledSpan>을 좋아합니다.</span>

          <span>많은 경험을 위해 스스로에게 <StyledSpan fontSize={"22px"} fontWeight={"600"} color={"#6388FF"}>영역 간의 구분과 한계를 두지 않고 개발</StyledSpan>하고 있습니다.</span>
          {/* </StyledDiv> */}
        </StyledDiv>

      </StyledDiv>
    </StyledDiv>
  );
}

export default Contents;


// 심도 있는 Front-End 개발자가 되고자 
// 노력하는 Web 개발자 입니다.

// 항상 내가 아닌 '사용자의 입장'에서 생각하려고 노력하며
// 좋은 UX를 구현하고자 합니다.

// 크고 작은 프로젝트를 진행하면서 
// 팀원들과 의견을 교환하며 소통하는 것을 좋아합니다.

// 많은 경험을 위해 스스로에 대해 
// 영역 간의 구분과 한계를 두지 않고 개발하고 있습니다.