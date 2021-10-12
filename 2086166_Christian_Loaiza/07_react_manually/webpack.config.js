module.exports = {
  module: {
    rules: [
      {
        //We are telling webpack to invoke babel-loader in each js file
        //that is not in node_modules
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};