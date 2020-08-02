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

- 컬러셋을 만들자 
    - root/src/styles/color.js 파일 생성
    - [color.js] 컬러셋 만들기

- 인풋 기능을 만들자   
    - [ToDoForm.jsx] 
    ToDoForm 컴포넌트는 props로 insertTodolist를 받아온다. insertTodolist는 인풋의 내용이다.
    ~e.preventDefault();~ 는 폼제출 시, 브라우저가 리로드/리프레쉬 되는 것을 막아준다
    - [App.jsx]
    useState, useCallback 
    할일 추가는 불변성을 지키면서 배열에 새 항목을 추가해야 함-> spread 연산자 이용

    
