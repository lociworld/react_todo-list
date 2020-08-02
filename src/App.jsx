import React from 'react';
import styled from 'styled-components';
import ToDoForm from './components/ToDoForm';




const App = () => {
  return (
    <>
    <Container>
      <Layout>
      <ToDoTitle>오늘의 할일</ToDoTitle>
      <ToDoForm />

      </Layout>
    </Container>
    </>
  
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ToDoTitle = styled.div`
  font-size: 24px;
`;