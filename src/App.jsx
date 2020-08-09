import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import ToDoForm from './components/ToDoForm';
import ToDoListView from './components/ToDoListView';


const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [edit, setEdit] = useState(false);
  const [updatedText, setUpdatedText] = useState('');


  const insertTodolist = useCallback((newTodolist) => {
    setTodolist([...todolist, newTodolist]);
  }, [todolist]);


  const handleSubmitTodolist = useCallback((e) => {
    e.preventDefault();
    insertTodolist({
      id: `${new Date().getTime()}-${Math.random()}`,
      text: inputVal,
      isDone: false,
      isDelete: false,
      isEdit: false,
    })
    // 전송이 끝나면 인풋을 clear해줘서 사용성을 올려준다.
    setInputVal('');
}, [insertTodolist, inputVal, setInputVal])

  
 const updateTodolist =  useCallback((id, text) => {
   
    const findIndex = [...todolist].findIndex((item) => item.id === id);
    const findTarget = [...todolist].find(item => item.id ===id);

    if (findTarget) {
      findTarget.isEdit = true;
      
    }
       
    const list = [...todolist].filter((item) => item.id !== id);
    list.splice(findIndex, 0, findTarget);
    setTodolist(list);
  }, [todolist]);
  
  const updateSubmitTodolist = useCallback((id, text) => {
   
    const findIndex = [...todolist].findIndex((item) => item.id === id);
    const findTarget = [...todolist].find(item => item.id ===id);

    if (findTarget) {
      findTarget.text = updatedText;
      // console.log(updatedText);
      // console.log("findTarget.text", findTarget, findTarget.text)
    }

    const list = [...todolist].filter((item) => item.id !== id);
    console.log(list);
    setEdit(false);
    console.log("edit", edit);
    list.splice(findIndex, 0, findTarget);
    setTodolist(list);
    findTarget.isEdit = false;
    
  }, [todolist, updatedText, edit]);

  const updateCancelTodolist = useCallback((id)=> {
    const findTarget = [...todolist].find(item => item.id ===id);
  
    setTodolist([...todolist])
    findTarget.isEdit = false;
    
  }, [todolist])

  const deleteTodolist = useCallback((id) => {
    // 물리삭제의 경우
    // const deletedTodolist = [...todolist].filter(item => item.id !== id);
    // setTodolist(deletedTodolist);

    // 논리삭제의 경우
    const findIndex = [...todolist].findIndex((item) => item.id === id);
    const findTarget = [...todolist].find((item) => item.id === id);
    
    if (findTarget) {
      findTarget.isDelete = true;
    }
    
    const list = [...todolist].filter((item) => item.id !== id);
    list.splice(findIndex, 0, findTarget);
    setTodolist(list);
    console.log(list);
    console.log("length" ,list.length);
    
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
          <Spacing height={20} />
          <ToDoForm insertTodolist={insertTodolist} inputVal={inputVal} setInputVal={setInputVal}  />
          <Spacing height={20} />
          <ToDoListView updateSubmitTodolist={updateSubmitTodolist} todolist={todolist} updateTodolist={updateTodolist} updateCancelTodolist={updateCancelTodolist} deleteTodolist={deleteTodolist} toggleDoneTodolist={toggleDoneTodolist} setUpdatedText={setUpdatedText} updatedText={updatedText} handleSubmitTodolist={handleSubmitTodolist} edit={edit} setEdit={setEdit} />
        </Layout>
      </Container>
    </>    
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ToDoTitle = styled.div`
  font-size: 24px;
`;

const Spacing = styled.div`
  height: ${({height}) => height}px;
`;
