import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
// Provide Redux store data to our React components
import { Provider as ReduxProvider } from "react-redux";

// is useful pass an initial state to the store
// if you are server rendering or initializing Redux
// with data from localStorage.
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
