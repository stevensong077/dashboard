import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("root")
);
