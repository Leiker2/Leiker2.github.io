import  React  from 'react';
import { TodoLogo } from './TodoLogo';
import { TodoCounter } from './TodoCounter';
import { TodoContainer } from './TodoContainer';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAddTaskButton } from './TodoAddTaskButton';

import './index.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar agua', completed: false },
  { text: 'Tomar el curso de React', complete: false },
  { text: 'Hacer compras', completed: true },
  { text: 'Lavar la losa', completed: false },
  { text: 'Tender la cama', completed: true }
];

function App() {

  const [todos,setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
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
    
    <TodoAddTaskButton/>
    </>
  );
}

export default App;
