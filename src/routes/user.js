'use strict'

const User = require('../controller/user');

module.exports = function (ctx) {
    const db = ctx.db,
        server = ctx.server;

    server.post('/user', function(req, res, next) {
        let data = req.body || {};

        let user = new User(data);
        user.save()
            .then(function (user) {
                console.log('save');
            })
            .catch(function (error) {
                console.loh('error');
        });
    });
}