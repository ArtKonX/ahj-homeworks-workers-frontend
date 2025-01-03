const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "/dist"),
    open: true,
    compress: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
