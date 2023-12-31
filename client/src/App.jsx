import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Singup from "./Page/Singup/singup";
import Todo from "./TODO/Todo_Main/todo";
import Todo_list from "./TODO/components/todo-list/todo_list";
import Todo_personal from "./TODO/components/person-list/todo_personal";
import User from "./TODO/components/user-list/todo_user";
import Todo_Update from "./TODO/components/todo-list/update/todo_update";
import User_Update from "./TODO/components/user-list/user-update/u_update";

import Reg from "../interface_mysql";
import Log from "../login_mysql";

const router = createBrowserRouter([
  {
    path: "/reg",
    element: <Reg />,
  },
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gg",
    element: <Login />,
  },
  {
    path: "/sing",
    element: <Singup />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/todo_list",
    element: <Todo_list />,
  },
  {
    path: "/todo_personal",
    element: <Todo_personal />,
  },
  {
    path: "/update/task/:id",
    element: <Todo_Update />,
  },
  {
    path: "/update/user/:id",
    element: <User_Update />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
