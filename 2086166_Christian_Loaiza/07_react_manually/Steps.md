# This is for full stack

`npm init -y //This create a package.json`
`npm i express`
`npm i react react-dom`
Is module bundle, allow to separate production packages from dev

`npm i webpack webpack-cli`
Compile JSX to regular React API calls

`npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react`

## Dev dependencies

`npm i -D nodemon`
Auto restart node when we change something in node is a node watcher
`npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks`
Help us to see mistakes while developing

### configure eslint

create a **.eslintrc.js** file and add basic configuration.

```js
module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": ["off"],
  },
};
```

### Config Babel

create a **.babel.config.js** file and add basic configuration.

```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```

### Config Webpack

create a **.webpack.config.js** file and add basic configuration.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

### Add server script

add

```json
"scripts": {
  "dev:server": "nodemon --exec babel-node src/server/server.js --ignore dist/",
  "dev:bundler": "webpack -w --mode=development"
  }
```

### Add files to run react

create a **App.js** and **index.js** inside *components* directory and add this.

**App.js**

```js
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
```

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// hydrate allows to run react in server side, is the server equivalent to render
ReactDOM.hydrate(<App />, document.getElementById("mountNode"));
```

Also inside *server* directory add **server.js**.
**server.js**

```js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(4242, () => console.log("Server is running..."));
```

Could run one on each
`npm run dev:server`
`npm run dev:bundler`

**Note:** You can acces template from [template](https://github.com/jscomplete/rgs-template/tree/master/src "React Manually Template")