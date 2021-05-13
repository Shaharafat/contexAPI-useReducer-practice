import { LOGIN_USER } from "../constants/auth";
import { GET_ALL_TODOS } from "../constants/todos";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      console.log("logging in");
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case GET_ALL_TODOS: {
      return {
        ...state,
        todos: action.payload.todos,
      };
    }
    default: {
      return state;
    }
  }
};
