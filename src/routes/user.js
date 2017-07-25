'use strict'

const User = require('../controller/user');

module.exports = function (ctx) {
    const db = ctx.db,
        server = ctx.server;

    server.post('/user', function(req, res, next) {
        let data = req.body || {};

        let user = new User();
        user.create(data)
          .then(function (result) {
            res.send(201, result);
            next();
          })
          .catch(function (e) {
            res.send(e);
            next();
          });
    });

  server.put('/user', function(req, res, next) {
    let user = new User();
    user.update(data)
      .then(function (user) {
        res.send(user);
        next();
      })
      .catch(function (e) {
        res.send(e);
        next();
      });
  });

  server.get('/user/:username', function(req, res, next) {
    let user = new User();
    user.findByUsername(req.params.username)
      .then(function (user) {
        console.log('save');
        res.send(user);
        next();
      })
      .catch(function (error) {
        console.loh('error');
        res.send({});
        next();
      });
  });

    server.post('/login', function(req, res, next) {
        let data = req.body || {};

        let user = new User();
        user.login(data)
            .then(function (result) {
                res.send(200, result);
                next();
            })
            .catch(function (e) {
                res.send(e);
                next();
            });
    });
}