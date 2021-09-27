import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";

import routes from "./routes";

const pages = [
  // Public pages
  {
    exact: true,
    path: routes.login,
    component: Login,
    layout: PublicLayout,
  },
  // Authenticated pages
  {
    exact: false,
    path: routes.dashboard,
    component: Dashboard,
    layout: AuthLayout,
  },
];

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {pages.map(
            ({ exact, path, component: Component, layout: Layout }, index) => (
              <Route
                key={index}
                exact={exact}
                path={path}
                render={(props) => (
                  <Layout history={props.history}>
                    <Component {...props} />
                  </Layout>
                )}
              />
            )
          )}
          <Redirect to={routes.dashboard} />
          {/* Or Uncomment below to use a custom 404 page */}
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
