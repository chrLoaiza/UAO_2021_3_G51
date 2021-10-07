import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// hydrate allows to run react in server side, is the server equivalent to render
ReactDOM.hydrate(
  <App />,
  document.getElementById("mountNode"),
);