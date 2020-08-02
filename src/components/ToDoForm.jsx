import React, { useState, useCallback }from 'react';
import styled from 'styled-components';
import { colors } from '../styles/color';


const ToDoForm = ({insertTodolist}) => {
    const [inputVal, setInputVal] = useState('');

    const handleChangeText = useCallback((e) => {
        setInputVal(e.target.value);
    }, []);

    const handleSubmitTodolist = useCallback((e) => {
        e.preventDefault();
        insertTodolist({
           id: `${new Date().getTime()}-${Math.random()}`,
           text: inputVal,
           isDone: false,
           isDelete: false
        })
    }, [inputVal, insertTodolist])

    return (
        <>
            <ToDoFormContainer>
                <ToDoInput onChange={handleChangeText}/>
                <ToDoSubmitButton onClick={handleSubmitTodolist}>+</ToDoSubmitButton>
            </ToDoFormContainer>
            <div>{inputVal}</div>
        </>
    )
}

export default ToDoForm;

const ToDoFormContainer = styled.form`
  display: flex;
  align-items: center;
  height: 40px;
`;

const ToDoInput = styled.input`
  margin-right: 10px;
  width: 250px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border-radius: 10px;
  border: 2px solid gray;
`;

const ToDoSubmitButton = styled.button`
  height: 100%;
  cursor: pointer;
  outline: none;
  color: ${colors.white};
  background-color: blue;
  border-radius: 10px;
  border: 2px solid gray;
`;