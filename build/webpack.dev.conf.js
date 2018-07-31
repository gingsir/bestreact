"use strict";

const config = require("../config");
const { devServerProxyTables } = require("./utils");
const merge = require("webpack-merge");
const webpack = require('webpack');
const baseWebpackConfig = require("./webpack.base.conf");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

module.exports = merge(baseWebpackConfig, {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    clientLogLevel: 'warning',
    contentBase: "./dist",
    compress: true,
    disableHostCheck: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    proxy: devServerProxyTables()

  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoEmitOnErrorsPlugin(),
  //   new FriendlyErrorsPlugin()
  // ]
});
