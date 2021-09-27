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

const Dashboard = () => {
  return (
    <Switch>
      {/* <RouteWithProps exact path="/dashboard/logout" component={Logout} /> */}
      <RouteWithProps exact path={routes.dashboard} component={DashboardView} />
      <RouteWithProps exact path={routes.users} component={Users} />
      <RouteWithProps exact path={routes.investments} component={Investments} />
      <RouteWithProps exact path={routes.orders} component={Orders} />
      <RouteWithProps exact path={routes.user} component={User} />
    </Switch>
  );
};

export default Dashboard;
