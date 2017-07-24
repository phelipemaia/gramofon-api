'use strict'

module.exports = function (ctx) {
    const db = ctx.db,
        server = ctx.server;

    require('./user')({ db, server });
}