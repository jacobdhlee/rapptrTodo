import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import Search from '../../components/ListItem/search';
import ListItem from '../../components/ListItem';

import { Container, Button, ListContainer, EmptyText } from './styles';

import { getAssessToken } from '../../config/helper';

const List = () => {
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState(false);
  const [item, setItem] = useState('');
  const [editItem, changeEditItem] = useState('');
  const [listTodo, changeListTodo] = useState([]);
  
  useEffect(() => {
    getItems()
  }, []);

  const history = useHistory()

  const getItems = () => {
    // const itemsList = localStorage.getItem(getAssessToken());
    // if(itemsList) {
    //   changeListTodo([...JSON.parse(itemsList)]);
    // }
  }

  const setItemsList = (list) => {
    // const itemsList = JSON.stringify(listTodo);
    // localStorage.setItem(getAssessToken(), list);
  }
  
  const handleAddItem = () => {
    const todo = {
      text: item,
      id: Math.random() * 100000
    }
    const newList = [...listTodo, todo]
    changeListTodo(newList);
    setItem('');
    setNewItem(false);
    setItemsList(newList);
  };

  const handleDeleteItem = (e, it) => {
    let newTodo = [...listTodo].filter(todo => todo.id !== it.id);
    changeListTodo(newTodo);
    setItemsList(newTodo);
  }

  const handleSave = (e, item) => {
    let newTodo = [...listTodo];
    const index = newTodo.findIndex(ele => ele.id === item.id);
    const newItem = {...item, text: editItem};
    newTodo.splice(index, 1, newItem);
    changeListTodo([...newTodo]);
    changeEditItem('');
    setItemsList(newTodo);
  }

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    history.push('/');
  }

  return (
    <Container>
      <Button onClick={handleLogOut}>Log Out</Button>
      <h1>My To-Do List</h1>
      <ListContainer>
        <Search 
          icon={<FaSearch />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setNewItem(true)}
          placeholder={'Search'}
          buttonText={'New'}
          type={''}
        />
        {newItem && (
          <Search
            type={'add'}
            value={item}
            disabled={item.length === 0}
            onChange={(e) => setItem(e.target.value)}
            onClick={handleAddItem}
            placeholder={'work out'}
            max={25}
            buttonText={'Save'}
          />
        )}
        {
          listTodo.length > 0 ? listTodo.filter(t => t.text.includes(search)).map((item, i) => {
            return (
              <ListItem
                key={i}
                name={item.text}
                setEditItem={() => changeEditItem(item)}
                handleDelete={(e) => handleDeleteItem(e, item)}
                handleSave={(e) => handleSave(e, item)}
                onChange={(e) => changeEditItem(e.target.value)}
                handleCancel={() => changeEditItem('')}
                max={25}
                value={editItem.text}
              />
            )
          }) : <EmptyText>No List</EmptyText>
        }
      </ListContainer>
    </Container>
  )
}

export default List;