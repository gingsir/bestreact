"use strict";

const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

const env = require('../config/dev.env');

module.exports = merge(baseWebpackConfig, {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJSPlugin()
  ],
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  }
});
