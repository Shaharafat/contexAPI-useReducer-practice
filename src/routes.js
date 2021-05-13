// import Todos from "./component/Todos";
import { lazy } from "react";
import SingleTodo from "./component/SingleTodo";

const Todos = lazy(() => import("./component/Todos"));
export const routes = [
  {
    name: "todos",
    path: "/todos",
    component: Todos,
    exact: false,
    authorization: true,
  },
  {
    name: "singleTodo",
    path: "/singleTodo",
    component: SingleTodo,
    exact: false,
    authorization: true,
  },
];
