import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/color';


const ToDoForm = () => {
    // const [inputVal, setInputVal] = useState('');

    return (
        <>
            <ToDoFormContainer>
                <ToDoInput />
                <ToDoSubmitButton>+</ToDoSubmitButton>
            </ToDoFormContainer>
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