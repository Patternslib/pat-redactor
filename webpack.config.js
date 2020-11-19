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
          exclude: /node_modules\/(?!(patternslib)\/).*/,
          loader: "babel-loader",
        }
      ],
    },
    resolve: {
      alias: {
        redactor: path.resolve(__dirname, '../redactor'),
      },
    },
    devServer: {
      port: "8000",
      host: "0.0.0.0",
    },
  };
};
