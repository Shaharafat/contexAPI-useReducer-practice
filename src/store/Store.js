import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOGIN_USER } from "./constants/auth";
import { reducer } from "./reducer/reducer";
const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  todos: [],
};

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const user = await res.json();
      if (state.user.email === user.email) {
        dispatch({ type: LOGIN_USER });
      }
    })();

    console.log(state);
  }, []);

  const storeValue = {
    state,
    dispatch,
  };

  return (
    <Store.Provider value={storeValue}>
      {state.loading ? <p>loading..</p> : children}
    </Store.Provider>
  );
};

export default StoreProvider;
