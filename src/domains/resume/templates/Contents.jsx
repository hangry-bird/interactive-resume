import React from 'react';
import AOS from 'aos';
import HSH from 'src/assets/images/photo/hsh2.jpg'

const Contents = () => {

  AOS.init();

  return (
    <div className="contents-wrap">

      <div 
        className="aboutMe-wrap"
        data-aos="fade-right"
        data-aos-duration="500">

      
        {/* 상단 Contact */}
        <div className="title-area">
          <div className="image-area">
            <div className="image-wrap">
              <img src={HSH} alt="" style={{ objectFit: "cover", width: "100%" }} />
            </div>
          </div>

          <div className="contact-area">
          </div>

        </div>

        {/* 하단 설명 문구 */}
        <div className="explanation-area">
          {/* <StyledDiv> */}
          <p>심도 있는 <span className="bold">Front-End</span> 개발자가 되고자 노력하는 Web 개발자 입니다.</p>

          <span>항상 내가 아닌 <span className="bold">'사용자의 입장'</span>에서 생각하려고 노력하며 좋은 UX를 구현하고자 합니다.</span>

          <span>크고 작은 프로젝트를 진행하면서 팀원들과 <span className="bold">의견을 교환하며 소통하는 것</span>을 좋아합니다.</span>

          <span>많은 경험을 위해 스스로에게 <span className="bold">영역 간의 구분과 한계를 두지 않고 개발</span>하고 있습니다.</span>
          {/* </StyledDiv> */}
        </div>

      </div>
    </div>
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