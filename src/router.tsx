import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { NotFound } from "./pages/404";
import { TodoListPage } from "./pages/ToDoListPage";
import { ToDo } from "./models/todo-item";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem"

const todos : ToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: false
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: true
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: false
  },
  {
    id: 3,
    text: "Четвертое действие",
    isDone: true
  }
]


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      errorElement: <NotFound />,
      children: [
        {path: "/", element: <TodoListPage /> },
        {path: "/list/", element: <ViewList todos={todos}/> },
        {path: "/list/:id", element: <ViewListItem todos={todos}/> }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])