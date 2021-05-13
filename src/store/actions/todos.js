import axios from "axios";
import { GET_ALL_TODOS } from "../constants/todos";

export const getAllTodos = async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/",
    {
      accept: "application/json",
    }
  );

  const { data } = response;
  const todos = data.slice(0, 5);

  dispatch({ type: GET_ALL_TODOS, payload: { todos } });

  console.log(data);
};
