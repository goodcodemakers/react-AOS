import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { IconName } from "react-icons/bs";
import { BsFillCloudHailFill } from "react-icons/bs";
/* import { IconName } from "react-icons/bs" 
npm install react-icons --save 리엑트 아이콘 불러오기
부트스트립아이콘불러오기
IconName 에 해당되는 아이콘의 명을 불러와 
리턴하는곳에 태그처럼 써주면 된다 .
https://react-icons.github.io/react-icons/icons?name=bs */
function App() {
  // AOS 초기화
  useEffect(() => {
    AOS.init();
  });
  const iconLarge = { fontSize: "80px" };
  return (
    <div className="App">
      <section className="s1">
        <div>
          <h1>Animation on scroll</h1>
          <p>스크롤시 애니메이션 효과 주기</p>
        </div>
      </section>
      <section className="s2">
        {/* 리엑트 AOS를 설치하여 
      npm i AOS를 설치하여 임포트 하여 들고온다음
      data-aos를 하여 효과를 줘도 되며 없는 효과를 주고싶을경우 css에서 커스텀할수 있다 .예시 사이트 https://michalsnik.github.io/aos/ */}
        <h1 data-aos="fade-left">section 2</h1>
        <BsFillCloudHailFill style={iconLarge} />
      </section>
      <section className="s3">
        <img
          className="logo"
          data-aos
          data-aos-delay="0"
          data-aos-duration="3000"
          src={logo}
          alt="logo"
        />
      </section>
    </div>
  );
}

export default App;
