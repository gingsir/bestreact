"use strict";

const path = require("path");

module.exports = {
  dll: {
    manifestPath: "dll/manifest.json"
  },
  dev: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",

    host: "0.0.0.0",
    port: 80,
    autoOpenBrowser: false,

    project: {
      name: "br",
      backends: {
        api: 10080,
      },
      f_users: {
        ljs: "127.0.0.1"
      },
      b_users: {
        ljs: "127.0.0.1"
      }
    },
  },
  build: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    assetsRoot: path.resolve(__dirname, "../dist")
  }
};
