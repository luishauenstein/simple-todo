import TodoListItem from './TodoListItem';
import { useContext } from 'react';
import { TodoContext } from '../App';

export default function ListOfTodos() {
  const [todos] = useContext(TodoContext); //no need to import setTodos

  const todoItems = () =>
    todos.map((item, index) => <TodoListItem todoItem={item} todoIndex={index} key={index} />);

  return <div>{todoItems()}</div>;
}
