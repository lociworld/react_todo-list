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

- 인풋 창에 입력된 할 일 목록을 인풋박스 아래에 추가, 완료, 수정, 삭제 
    - [ToDoListView.jsx]
    완료, 수정, 삭제 버튼 생성
    마우스 클릭 시 완료, 수정, 삭제 기능 
    - [App.jsx]
    ToDoListView 컴포넌트 임포트

- 수정 기능을 구현했다
    - 수정 상태 일 때, 투두 리스트 목록에서 수정하고자 하는 투두 아이템이 텍스트에서 인풋창으로 바뀌도록 했다. 
    - 이를 위해 ToDoListView.jsx 에서 if문을 이용해 에딧 상태 일 때는 인풋 컴포넌트를 사용했고, 버튼은 수정 취소, 수정, 삭제 버튼을 보이게 했다. 에딧 상태가 아닐 때에는 텍스트 컴포넌트를 사용했고, 버튼은 완료, 수정, 삭제버튼을 보이게 했다 . 
    - 인풋 컴포넌트는 투두폼과 투두리스트뷰 에서 쓰고, onChange 이벤트를 만들어주었다. 처음에는 투두폼에서 만든 onChange를 그대로 이용했는데 그 결과, 투두리스트뷰의 인풋창에 값을 입력하는 대로 투두폼의 인풋창에도 같은 값이 나오는 바람에 투두리스트뷰의 onChange 를 다른 이름으로 따로 만들었다. 
    - 수정 상태에서 투두리스트 아이템 인풋창에 값을 입력하고, 수정버튼을 누르면 handleUpdateSubmitTodolist 이벤트가 발생하고, id 와 인풋내용이 인자로 전달된다. 인풋내용을 보내주지 않아서 findTarget.text 를 updatedText로 갱신해줄 수 없었는데 인풋내용을 인자로 전달하면서 해결했다.

    
