~~~
npx create-react-app todo-list
yarn add styled-components
~~~

- 이번 프로젝트에서 필요 없는 파일을 지우고 시작하자
App.css 
App.tets.js
index.css

- js 파일을 jsx로 바꾸고 시작하자
- App.js 와 index.js 에서 아까 삭제한 파일과 관련된 것 지워주기
- App.jsx 깔끔하게 시작하기
~~~
import React from 'react';


const App = () => {
  return (
    <>
    </>
  
  );
}

export default App;
~~~

- 오늘 할 일 제목을 띄워보자! 
    - App.jsx 에서 스타일 컴포넌트로 타이틀 생성

- 인풋 박스와 버튼을 만들자
    - root/src/components/ToDoForm.jsx 파일 생성
    - [ToDoForm.jsx] 스타일 컴포넌트로 인풋, 버튼 생성 

