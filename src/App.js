import ListOfTodos from './components/ListOfTodos';
import TodoInputField from './components/TodoInputField';
import './App.css';
import { createContext } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  return (
    <div className="App">
      <TodoContext.Provider value={[todos, setTodos]}>
        <h1>Simple Todo App</h1>
        <ListOfTodos />
        <TodoInputField />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
