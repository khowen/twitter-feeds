var morgan  = require('morgan');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var router  = express.Router();
var server  = require('http').createServer(app);
var Twit    = require('twit');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(morgan('dev'));

router.get('/', function(req, res) {
  res.render('index', { title: 'Twitter Search' });
});

app.user('/', router);
server.listen(port);
console.log('Server started on', port);
var io = require('socket.io')(server);
