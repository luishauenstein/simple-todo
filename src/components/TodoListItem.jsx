import { useContext } from 'react';
import { TodoContext } from '../App';

export default function TodoListItem(props) {
  const [todos, setTodos] = useContext(TodoContext);

  const removeThisTodo = () => {
    const todosNew = [...todos];
    todosNew.splice(props.todoIndex, 1);
    setTodos(todosNew);
  };

  return (
    <div className="todoItem">
      <button className="deleteButton" onClick={() => removeThisTodo()}>
        Delete
      </button>
      <span>{props.todoItem}</span>
    </div>
  );
}
