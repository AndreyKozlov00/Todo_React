import { useCallback, useState } from "react";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const defaultTodos = [
    {
      id: 0,
      text: "Первая задача",
      isDone: true,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: false, 
    },
    {
      id: 2,
      text: "Третья задача",
      isDone: true,
    },
];

export const TodoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>(defaultTodos);

  const createNewToDo = (text: string) => {
    const newTodo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateToDo = useCallback((todoToUpdate: ToDo) => {
    const textRename = prompt("Введите новое значение", todoToUpdate.text);

    if (!textRename || textRename === todoToUpdate.text) {
      return;
    }

    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todoToUpdate.id === todo.id) {
          todo.text = textRename;
        }

        return todo;
      });
    });
    toast("todo updated");
  }, []);

  const deleteToDo = useCallback((todoToDelete: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(newTodos);

    toast("todo deleted");
  }, [todos]);

  const toggleToDo = useCallback((currentToDo: ToDo) => {
    const newTodosWithToggle = todos.map((todo) => {
      if (currentToDo.id === todo.id) {
        todo.isDone = !currentToDo.isDone;
      }

      return todo;
    });

    setTodos(newTodosWithToggle);
  }, [todos]);

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
        toggleToDo={toggleToDo}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
