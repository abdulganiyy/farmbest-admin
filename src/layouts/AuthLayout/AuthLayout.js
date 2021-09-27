import React from "react";
import { Link } from "react-router-dom";
import Menubar from "../../components/Menubar/Menubar";

import "./AuthLayout.css";

import routes from "../../routes";

const AuthLayout = ({ history, children }) => {
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push(routes.login);
    }
  }, [history]);

  // const [navigate, setNavigate] = React.useState(false);

  // React.useEffect(() => {
  //   if (navigate) {
  //     history.push(routes.login);
  //   }
  // }, [navigate, history]);

  // // if (navigate) {
  // //   return <Redirect to="/login" push={true} />;
  // // }

  return (
    <div className="wrapper">
      <div className="header">
        <Menubar />
      </div>
      <div className="main">
        <div className="sidebar">
          <ul className="nav-list">
            <li className="item">
              <Link to={`${routes.dashboard}`}>Dashboard</Link>
            </li>
            <li className="item">
              <Link to={`${routes.users}`}>Users</Link>{" "}
            </li>
            <li className="item">
              {" "}
              <Link to={`${routes.investments}`}>Investments</Link>{" "}
            </li>
            <li className="item">
              {" "}
              <Link to={`${routes.orders}`}>Orders</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
