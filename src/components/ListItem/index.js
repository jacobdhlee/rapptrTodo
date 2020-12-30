import React, { useState } from 'react';
import {MdEdit, MdDelete, MdClose} from 'react-icons/md'

import { 
  Container,
  ItemContainer,
  ButtonContainer,
  SaveButton,
  EditIcon,
  CloseBtn
} from './styles';

const ListItem = ({
  name,
  handleDelete,
  handleSave,
  onChange,
  setEditItem,
  handleCancel,
  value,
  max
}) => {
  const [ edit, setEdit ] = useState(false);

  const handleEdit = () => {
    setEdit(true);
    setEditItem();
  }

  const handleEditSave = (e) => {
    e.preventDefault();
    setEdit(false);
    handleSave();
  }

  const handleEditCancel = () => {
    setEdit(false);
    handleCancel();
  }

  return (
    <Container>
      <ItemContainer>
        {edit ? (
          <input type={'text'} onChange={onChange} value={value} maxLength={max}/>
        ) : (<span>{name}</span>)}
      </ItemContainer>
      <ButtonContainer>
        {
          edit ? (
            <>
              <SaveButton onClick={handleEditSave}>Save</SaveButton>
              <CloseBtn onClick={handleEditCancel}>
                <MdClose />
              </CloseBtn>
            </>
          ) : (
            <>
              <EditIcon onClick={handleEdit}>
                <MdEdit size={20}/>
              </EditIcon>
              <EditIcon onClick={handleDelete}>
                <MdDelete size={20}/>
              </EditIcon>
            </>
          )
        }
      </ButtonContainer>
    </Container>
  )
}

export default ListItem;