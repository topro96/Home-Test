const path = require("path");
const webpack = require("webpack");

const clientConfig = (env) => {
  return {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: "tsconfig.client.json",
          },
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    },
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "../home-test-back-end/public"),
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(`${env.API_URL}`),
      }),
    ],
  };
};

module.exports = [clientConfig];
