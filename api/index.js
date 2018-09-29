const restify = require('restify');

function respond(req, res, next) {
  res.send('Greetings' + req.params.name);
  next();
}

const server = restify.createServer();
server.get('/test/:name', respond);
server.head('/test/:name', respond);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

