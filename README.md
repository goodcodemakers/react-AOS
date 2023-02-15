### react AOS
- 리엑트에서쓰이는 AOS 툴을 받는방법
 리엑트 AOS를 설치하여 
      npm i AOS를 설치하여 임포트 하여 들고온다음
      data-aos를 하여 효과를 줘도 되며 없는 효과를 주고싶을경우 css에서 커스텀할수 있다 .예시 사이트 "https://michalsnik.github.io/aos/"
      
### react icon 
- /* import { IconName } from "react-icons/bs" 
npm install react-icons --save 리엑트 아이콘 불러오기
부트스트립아이콘불러오기
IconName 에 해당되는 아이콘의 명을 불러와 
리턴하는곳에 태그처럼 써주면 된다 .
https://react-icons.github.io/react-icons/icons?name=bs */


1. npm을 통해 AOS를 설치한다.
터미널을 열고 다음의 커맨드를 입력한다.
```
npm install aos --save
```
2. AOS를 사용할 컴포넌트로 이동하자.
그리고 다음과 같이 AOS 파일들을 import 하면 된다.
```
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
```
3. useEffect 함수를 통해 AOS 를 초기화 해준다.
```
useEffect(() => {
  AOS.init();
})
```
