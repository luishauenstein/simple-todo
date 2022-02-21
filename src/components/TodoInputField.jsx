import useLocalStorage from '../hooks/useLocalStorage';
import { useContext } from 'react';
import { TodoContext } from '../App';

export default function TodoInputField() {
  const [inputValue, setInputValue] = useLocalStorage('inputField', '');
  const [todos, setTodos] = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todosNew = [...todos, inputValue];
    setTodos(todosNew);
    setInputValue('');
  };

  return (
    <form className="inputForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Enter todo and press enter to submit"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </form>
  );
}
