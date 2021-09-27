import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../slices/auth";

import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loggedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Object.values(data).length !== 2) return;
    dispatch(login(data));
  };

  return (
    <>
      {loggedIn === true ? <Redirect to="/dashboard" /> : null}
      <div className="form-container">
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <button className="form-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
