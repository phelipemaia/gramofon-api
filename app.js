const restify = require('restify');

function respond(req, res, next) {
    res.send('hello' + req.params.name);
    next();
}

const server = restify.createServer();
server.get('users', respond);

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
})