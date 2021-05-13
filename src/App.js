import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import StoreProvider from "./store/Store";

function Loading() {
  return <h1>Loading</h1>;
}
function App() {
  return (
    <StoreProvider>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {routes.map((route) => {
              return (
                route.authorization && (
                  <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                )
              );
            })}
          </Switch>
        </Router>
      </Suspense>
    </StoreProvider>
  );
}

export default App;
