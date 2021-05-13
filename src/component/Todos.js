import React, { useEffect } from "react";
import { getAllTodos } from "../store/actions/todos";
import { useStore } from "../store/Store";

const Todos = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    (async () => {
      await getAllTodos(dispatch);
    })();

    console.log(state);
  }, []);

  return (
    <div>
      <ul>
        {state.todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
