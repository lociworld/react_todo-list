/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import emptyViewImage from '../assets/images/im-empty-view.png';
import {ToDoSubmitButton} from './ToDoForm.jsx'

const ToDoListView = ({todolist, deleteTodolist, toggleDoneTodolist}) => {

    const handleToggleDoneTodolist = useCallback((id) => () => {
        toggleDoneTodolist(id)
    }, [toggleDoneTodolist])

    const handleDeleteTodolist = useCallback((id) => () => {
        deleteTodolist(id);
    }, [deleteTodolist]);


    if (todolist.length === 0) {
        return <EmptyViewImage src={emptyViewImage} alt="리스트가 비었어요! 등록해주세요!" />
    }

    return (
        <ListContainer>
          {todolist.map(item => {
            if (item.isDelete) {
                return null;
            }
            return  (
                <ListItemStyle key={item.id}>
                    <ListContentGroup>
                        <ListItemIcon>📝</ListItemIcon>
                        <ListItemText isDone={item.isDone}>{item.text}</ListItemText>
                    </ListContentGroup>
                    <ListButtonGroup>
                        <ListDoneButton onClick={handleToggleDoneTodolist(item.id)}>완료</ListDoneButton> 
                        <ListUpdateButton>수정</ListUpdateButton>
                        <ListDeleteButton onClick={handleDeleteTodolist(item.id)}>삭제</ListDeleteButton>
                    </ListButtonGroup>
                </ListItemStyle>
            )
          }
         )} 
        </ListContainer>
    )
}

export default ToDoListView;

const ListContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const EmptyViewImage = styled.img`
  width: 100%;
`;

const ListItemStyle = styled.li`
  width: 100%;
  padding: 10px 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItemIcon = styled.div`
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  line-height: 2;
`;

const ListItemText = styled.div`
  max-width: 280px;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${({isDone}) => isDone ? 'line-through' : null}
`;

const ListContentGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ListButtonGroup = styled.div`
  width: 140px;
`;

const ListDoneButton = styled(ToDoSubmitButton)`
  margin-right: 10px;
`;

const ListUpdateButton = styled(ToDoSubmitButton)`
  margin-right: 10px;
`;

const ListDeleteButton = styled(ToDoSubmitButton)``;