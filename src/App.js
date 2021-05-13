import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SingleTodo from "./component/SingleTodo";
import Todos from "./component/Todos";
import StoreProvider from "./store/Store";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/singleTodo" component={SingleTodo} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
