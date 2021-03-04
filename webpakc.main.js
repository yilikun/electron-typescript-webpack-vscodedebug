const path = require("path");
const webpack = require("webpack");

ROOT_PATH = __dirname;
module.exports = {
  mode: "development",
  target: "electron-main",
  devtool: "inline-source-map",
  entry: [path.resolve(ROOT_PATH, "src", "main.ts")],
  output: {
    path: path.resolve(ROOT_PATH, "webpack_dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  // module: {
  //   rules: [{
  //     test: /\.node$/,
  //     loader: 'custom-node-loader',
  //     options: {
  //       rewritePath: path.resolve(ROOT_PATH, 'addon')
  //     }
  //   }],
  // },
  node: {
    __dirname: false,
  },
}
