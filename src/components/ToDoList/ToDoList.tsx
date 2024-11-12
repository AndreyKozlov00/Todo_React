import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

interface Props {
  todos: ToDo[];
  updateToDo: (todoItem: ToDo) => void;
  deleteToDo: (todoItem: ToDo) => void;
  toggleToDo: (todoItem: ToDo) => void;
}

export const ToDoList = ({todos, updateToDo, deleteToDo, toggleToDo}: Props) => {
  const checkedList = () => {
    return todos
        .filter(item => !item.isDone)
        .map((item, index) => {
            return (<ToDoListItem 
                toDoItem={item} 
                key={index} 
                updateToDo={updateToDo} 
                deleteToDo={deleteToDo} 
                toggleToDo={toggleToDo}
                />
            )
        })
  }

  const unCheckedList = () =>{
    return todos
        .filter((item) => item.isDone)
        .map((item, index) => {
            return(
              <ToDoListItem
                  toDoItem={item} 
                  key={index} 
                  updateToDo={updateToDo} 
                  deleteToDo={deleteToDo}
                  toggleToDo={toggleToDo}
              />
            );
        })  
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        { checkedList() }
      </ul>
      <ul className="todo-list completed">
        { unCheckedList() }
      </ul>
    </div>
  );
};
