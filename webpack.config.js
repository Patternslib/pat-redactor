const path = require("path");
const webpack = require("webpack");


module.exports = (env) => {
  return {
    entry: {
      bundle: "./bundle-config.js",
    },
    externals: [
      {
        window: "window",
      },
    ],
    output: {
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        }
      ],
    },
    devServer: {
      port: "8000",
      host: "0.0.0.0",
    },
  };
};

