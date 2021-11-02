// eslint-disable-next-line no-unused-vars
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", // Allow us see original code in debuggen browser
  entry: "./src/index",
  output: {
    //Webpack does not output code in development, it serves from memory.
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    //how to serve app via Express in "Building JS dev env"
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    //What file has to handle
    rules: [
      {
        test: /\.(js|jsx)$/, //Every JSX or JS file
        exclude: /node_modules/, //No proccess file or route
        use: ["babel-loader", "eslint-loader"], //What todo with the JS files
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
