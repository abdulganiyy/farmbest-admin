import React from "react";

import { Switch } from "react-router-dom";

import routes from "../../routes";
import RouteWithProps from "../../RouteWithProps";

import DashboardView from "./DashboardView";
import Investments from "./Investments/Investments";
import Users from "./Users/Users";
import Orders from "./Orders";
// import Logout from "../Logout";
import User from "./User/User";
import NewUser from "./NewUser/NewUser";
import Investment from "./Investment/Investment";
import NewInvestment from "./NewInvestment/NewInvestment";
const Dashboard = () => {
  return (
    <Switch>
      {/* <RouteWithProps exact path="/dashboard/logout" component={Logout} /> */}
      <RouteWithProps exact path={routes.dashboard} component={DashboardView} />
      <RouteWithProps exact path={routes.users} component={Users} />
      <RouteWithProps exact path={routes.investments} component={Investments} />
      <RouteWithProps exact path={routes.orders} component={Orders} />
      <RouteWithProps exact path={routes.user} component={User} />
      <RouteWithProps exact path={routes.newuser} component={NewUser} />
      <RouteWithProps exact path={routes.investment} component={Investment} />
      <RouteWithProps
        exact
        path={routes.newinvestment}
        component={NewInvestment}
      />
    </Switch>
  );
};

export default Dashboard;
