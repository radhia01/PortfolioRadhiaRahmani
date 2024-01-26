import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
