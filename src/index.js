import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from "./reportWebVitals";
import usersReducer from "./slices/users";
import investmentsReducer from "./slices/investments";
import userReducer from "./slices/user";
import investmentReducer from "./slices/investment";

import authReducer from "./slices/auth";

import { Provider } from "react-redux";
import { combineReducers } from "redux";

const reducer = combineReducers({
  usersReducer: usersReducer,
  userReducer: userReducer,
  authReducer: authReducer,
  investmentsReducer: investmentsReducer,
  investmentReducer: investmentReducer,
});

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
