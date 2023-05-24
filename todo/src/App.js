import  React  from 'react';
import { TodoLogo } from './TodoLogo';
import { TodoCounter } from './TodoCounter';
import { TodoContainer } from './TodoContainer';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAddTaskButton } from './TodoAddTaskButton';

import './index.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar juego de lechosa', completed: false },
//   { text: 'Tomar el curso de React', complete: false },
//   { text: 'Hacer compras', completed: true },
//   { text: 'Lavar la losa', completed: false },
//   { text: 'Tender la cama', completed: true }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  ) 
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed === true
      ? newTodos[todoIndex].completed = false
      : newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };

  return (
    <>
    <TodoLogo/>
    <TodoCounter
      completed = {completedTodos}
      total = {totalTodos}
    />

    <TodoContainer>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem
              key= {todo.text}
              text = {todo.text}
              completed = {todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>
    </TodoContainer>
    
    <TodoAddTaskButton />
    </>
  );
}

export default App;
