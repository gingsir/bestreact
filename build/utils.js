"use strict";

const path = require('path');
const config = require('../config');

exports.resolve = dir => {
  return path.join(__dirname, "..", dir);
};

exports.assetsPath = _path => {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

// 返回 ProxyTables
// 返回格式例子
// [
//   {
//     context: "/platform",
//     target: "localhost",
//     router: {
//       "diy.hff.wp.com": "http://192.168.75.162:5101/platform",
//       "diy.hff.wxh.com": "http://192.168.75.233:5101/platform"
//     }
//   }
// ]
exports.devServerProxyTables = () => {
  let _proxyTables = [];
  const port = config.dev.port;
  const project = config.dev.project;
  const name = project.name;
  const backends = Object.keys(project.backends);
  const f_users = Object.keys(project.f_users);
  const b_users = Object.keys(project.b_users);


  for (let i = 0, leni = backends.length; i < leni; i++) {
    let proxy = {
      context: "/" + backends[i],
      target: "localhost",
    };

    let router = {};
    for (let j = 0, lenj = f_users.length; j < lenj; j++) {
      for (let k = 0, lenk = b_users.length; k < lenk; k++) {
        let key = `${name}.${f_users[j]}.${b_users[k]}.com${port !== 80 ? ':' + port : ''}`;
        router[key] = `http://${project.b_users[b_users[k]]}:${project.backends[backends[i]]}`;
      }
    }
    proxy.router = router;

    _proxyTables.push(proxy);
  }

  return _proxyTables;

};
