"use strict";

const webpack = require("webpack");
const { resolve } = require("./utils");
const config = require("../config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const GenEntryNPage = require("./generate-html-plugins");

const genEntryNPage = new GenEntryNPage();

module.exports = {
  entry: genEntryNPage.entries,
  output: {
    filename: "[name].js",
    path: config.build.assetsRoot,
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@e": resolve("src/entries"),
      "@m": resolve("src/modules"),
      "@p": resolve("src/plugins"),
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      // 处理 scss 文件
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      },
      // 处理 css 文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // 处理模板文件
      {
        test: /template\.html$/,
        use: "raw-loader"
      },
	  {
		test:/(\.jsx|\.js)$/,
		use:{
			loader:"babel-loader",
			options:{
				 presets: ['es2015', 'react'],
			}
		},
		exclude:resolve("node_modules"),
		include:resolve("src")
            }
	  
    ]
  },
  plugins: [
    /* 配置好Dll */
    new webpack.DllReferencePlugin({
      context: __dirname, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
      manifest: resolve(config.dll.manifestPath), // 指定manifest.json
      name: "dll" // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new CopyWebpackPlugin([
      {
        from: resolve("dll")
      }
    ])
  ].concat(genEntryNPage.htmlPlugins),
  optimization: {
    runtimeChunk: {
      name: "manifest"
    }
  }
};
