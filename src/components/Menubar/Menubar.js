import React from "react";

import "./Menubar.css";

// import routes from "../../routes";

const Menubar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.assign(window.location.hostname);
  };
  return (
    <div className="menubar">
      <div className="logo">FARMBEST</div>
      <div className="logout">
        horpeelo@gmail.com
        <ion-icon name="caret-down-outline"></ion-icon>
        {/* <Link to="/dashboard/logout"> */}
        <span className="logout-btn" onClick={logout}>
          Logout
        </span>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Menubar;
