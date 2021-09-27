import React from "react";
import { Redirect } from "react-router";

const Logout = () => {
  React.useEffect(() => {
    localStorage.clear();
  });
  return (
    <div>{!localStorage.getItem("token") ? <Redirect to="/" /> : null}</div>
  );
};

export default Logout;
