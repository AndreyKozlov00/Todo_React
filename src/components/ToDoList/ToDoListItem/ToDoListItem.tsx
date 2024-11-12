import { ToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

interface Props {
  updateToDo: (todoItem: ToDo) => void;
  deleteToDo: (todoItem: ToDo) => void;
  toDoItem: ToDo;
  toggleToDo: (todoItem: ToDo) => void;
}

export const ToDoListItem = ({
  updateToDo,
  deleteToDo,
  toDoItem,
  toggleToDo,
}: Props) => {
//   console.log("ToDoListItem render");
  return (
    <li className="todo-list-item__wrapper">
      <span>{toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button onClick={() => updateToDo(toDoItem)}>Rename</button>
        <button
          className="btn-trash"
          onClick={() => deleteToDo(toDoItem)}
        ></button>
        <button
          className={toDoItem.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => toggleToDo(toDoItem)}
        ></button>
      </div>
    </li>
  );
};
