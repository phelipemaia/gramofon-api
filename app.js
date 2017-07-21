const restify = require('restify');
const Promise = require('bluebird');
const mongoose = require('mongoose');

const user = require('./src/model/user');

mongoose.connect('mongodb://root:Nunc4Violara@ds027165.mlab.com:27165/gramofon');

var db = mongoose.connection;
db.on('error', console.log(console, 'connection error:'));
db.once('open', function() {
    console.log(console, 'connected to db')
});

var phelipe = new User({id: 123, name: 'Phelipe'});

phelipe.save();

function respond(req, res, next) {
    res.send('hello' + req.params.name);
    next();
}

const server = restify.createServer();
server.get('users', respond);

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
})