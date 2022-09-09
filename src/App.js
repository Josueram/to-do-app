import React from 'react';

// Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
// import './App.css';

const defaultTodos = [
  { text: 'Hacer una landing page', completed: false },
  { text: 'Tomar clases de desarrollo web', completed: true },
  { text: 'Asistir a la reunión de Google', completed: false },
]

function App() {
  // Definimos los todos por defecto
  const [todos, setTodos] = React.useState(defaultTodos);
  // Estado del componente del buscador
  const [searchValue, setSearchValue] = React.useState('');

  // Cantidad de los todos
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;
  
  // Mostrar los todos buscados
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  // Función para marcar los todos completados
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  
  
  // Función para eliminar los todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter 
        completed = {completedTodos}
        total = {totalTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text} 
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
