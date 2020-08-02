import React, {useState, useCallback}  from 'react';
import styled from 'styled-components';
import ToDoForm from './components/ToDoForm';
import ToDoListView from './components/ToDoListView';



const App = () => {
  const [todolist, setTodolist] = useState([]);

  const insertTodolist = useCallback((newTodolist) => {
    setTodolist([...todolist, newTodolist]);
  }, [todolist]);

  const deleteTodolist = useCallback((id) => {
    const findIndex = [...todolist].findIndex((item) => item.id === id);
    const findTarget = [...todolist].find((item) => item.id === id);

    if (findTarget) {
      findTarget.isDelete = true;
    }
    
    const list = todolist.filter((item) => item.id !== id);
    list.splice(findIndex, 0, findTarget);
    setTodolist(list);
  }, [todolist]);

const toggleDoneTodolist = useCallback((id) => {
  const findIndex = [...todolist].findIndex((item) => item.id === id);
  const findTarget = [...todolist].find((item) => item.id === id);
  
  if (findTarget) {
    findTarget.isDone = !findTarget.isDone;
  }
  
  const list = todolist.filter((item) => item.id !== id);
  list.splice(findIndex, 0, findTarget);
  setTodolist(list);
}, [todolist]);

  return (
    <>
    <Container>
      <Layout>
      <ToDoTitle>오늘의 할일</ToDoTitle>
      <ToDoForm insertTodolist={insertTodolist} />
      <ToDoListView todolist={todolist} deleteTodolist={deleteTodolist} toggleDoneTodolist={toggleDoneTodolist} />
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