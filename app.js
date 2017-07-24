const restify = require('restify');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const config = require('./config');

const User = require('./src/controller/user');

mongoose.connect('mongodb://root:Nunc4Violara@ds027165.mlab.com:27165/gramofon');

mongoose.Promise = require('bluebird');

// var db = mongoose.connection;
// db.on('error', console.log(console, 'connection error:'));
// db.once('open', function() {
//     console.log(console, 'connected to db')
// });

const user = new User();

user.create({'name': 'Phelipe'});

function respond(req, res, next) {
  res.send('hello' + req.params.name);
  next();
}

const server = restify.createServer();
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
})