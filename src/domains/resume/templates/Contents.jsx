import React from 'react';
import AOS from 'aos';
// import HSH from 'src/assets/images/photo/hsh2.jpg'
import HSH from 'src/assets/images/photo/hsh_emoji.png'

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
              <div className="span-cover" onClick={() => { window.location = "mailto:starcjs7@gmail.com" }}>starcjs7@gmail.com</div>
              <div className="span-cover" onClick={() => { window.open('#') }}>RESUME</div>
              <div className="span-cover" onClick={() => { window.open('https://github.com/hangry-bird') }}>GITHUB</div>
            <div className="span-cover-border" />
          </div>

        </div>

        {/* 하단 설명 문구 */}
        <div className="explanation-area">
          {/* <StyledDiv> */}
          <span>4년차 웹 개발자로 웹과 앱 솔루션을 개발/운영하였습니다.</span>
          <span>주로 전송망 관제 솔루션에 대한 웹 개발을 담당하였으며 Front & Back 에 대한 <span className="bold">영역 구분 없이 개발</span>하였습니다.</span>
          <span><span className="bold">사용자 경험에 대한 품질 향상</span> 시키는 것을 좋아합니다.</span>
          <span>이를 위해 좋은 사용자 경험이 무엇일까 고민하고 테스트하며 <span className="bold">동료 개발자들과 커뮤니케이션하며 협업</span>해왔습니다.</span>
          <span>반복되는 작업을 자동화하고 <span className="bold">코드 리팩토링</span>하는 것을 좋아합니다. </span>
          <span>타 부서 구성원들을 위해 자사 사용 프로그램을 개선하고 개발한 경험이 있습니다.</span>
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