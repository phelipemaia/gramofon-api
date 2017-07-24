'user strict'
const restify = require('restify');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = require('bluebird');

const server = restify.createServer({name: config.name,
    version: config.version});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(config.port, () => {
    console.log(`${server.name} listening at ${server.url}`);

    mongoose.connect(config.db.uri, (err, db) => {
        if (err) {
            console.error('An error occurred while attempting to connect to DB');
            process.exit(1);
        }

        console.info(`${server.name} v${config.version} ready to accept connections on port ${config.port} in ${config.env} environment.`);

        require('./src/routes/routes')({ db, server })
    });
});