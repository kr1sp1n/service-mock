const drakovMiddleware = require('drakov').middleware;
const config = require('./config.js');
const express = require('express');

const app = express();

drakovMiddleware.init(app, config, function (err, middlewareFunction) {
  if (err) {
    throw err;
  }

  app.use(middlewareFunction);
  app.listen(config.serverPort);
});
