"use strict";

const fs = require("fs");
const path = require("path");
const { resolve } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const filePath = path.resolve(__dirname, "../src/entries");

class GenEntryNPage {
  constructor() {
    this.entries = {};
    this.htmlPlugins = [];
    this.findEntryFile();

    this.htmlPlugins.push(
      new AddAssetHtmlPlugin([
        {
          filepath: resolve("dll/dll.css"),
          typeOfAsset: "css"
        },
        {
          filepath: resolve("dll/dll.js")
        }
      ])
    );
  }

  findEntryFile(dir) {
    if (!dir) {
      dir = filePath;
    }

    let files = fs.readdirSync(dir);
    files.forEach(filename => {
      let fileDir = path.join(dir, filename);
      let stats = fs.statSync(fileDir);
      if (stats.isDirectory()) {
        this.findEntryFile(fileDir);
      } else {
        if (filename === "index.js") {
          const key = dir.replace(filePath + path.sep, "").replace(/\\/g, "/");
          this.entries[key] = "./src/entries/" + key;
          this.htmlPlugins.push(
            new HtmlWebpackPlugin({
              chunks: ["manifest", key],
              filename: `${key}.html`,
              // template:"./build/entry.html"
            })
          );
        }
      }
    });
  }
}

module.exports = GenEntryNPage;