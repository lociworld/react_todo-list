import React, { useState, useCallback } from 'react';
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
        // 전송이 끝나면 인풋을 clear해줘서 사용성을 올려준다.
        setInputVal('');
    }, [inputVal, insertTodolist])

    return (
        <ToDoFormContainer>
            <ToDoInput value={inputVal} onChange={handleChangeText} />
            <ToDoSubmitButton onClick={handleSubmitTodolist}>전송</ToDoSubmitButton>
        </ToDoFormContainer>
    )
}

export default ToDoForm;

const ToDoFormContainer = styled.form`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
`;

const ToDoInput = styled.input`
  margin-right: 10px;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: ${colors.white};
`;

export const ToDoSubmitButton = styled.button`
  height: 100%;
  cursor: pointer;
  outline: none;
  background-color: ${colors.white};
  border-radius: 10px;
  border: 2px solid gray;
  transition: 300ms all ease-in-out;

  &:hover {
    color: ${colors.white};
    background-color: gray;
  }
`;