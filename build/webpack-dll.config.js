"use strict";

const config = require("../config");
const webpack = require("webpack");
const { resolve } = require("./utils");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    /*
      指定需要打包的js模块
      或是css/less/图片/字体文件等资源，但注意要在module参数配置好相应的loader
    */
    dll: [
      "jquery",
      "bootstrap/dist/css/bootstrap.min.css",
      "bootstrap/dist/js/bootstrap.min.js"
    ]
  },
  output: {
    path: resolve("dll"),
    filename: "[name].js",
    library: "[name]" // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
    alias: {
      "@e": resolve("src/entries"),
      "@m": resolve("src/modules"),
      "@p": resolve("src/plugins")
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve(config.dll.manifestPath), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: "[name]", // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: __dirname // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    /* 跟业务代码一样，该兼容的还是得兼容 */
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
      Popper: ["popper.js", "default"]
    }),
    new MiniCssExtractPlugin("[name].css")
  ],
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader"
      },
      // 处理 css 文件
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};
