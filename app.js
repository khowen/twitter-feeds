var morgan  = require('morgan');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var router  = express.Router();
var server  = require('http').createServer(app);
var Twit    = require('twit');

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
// console.log(twitter);

var stream = twitter.stream('statuses/filter', { track: 'javascript'});

app.set('views', './views');
app.set('view engine', 'jade');

app.use(morgan('dev'));

router.get('/', function(req, res) {
  res.render('index', { title: 'Twitter Search' });
});

app.use('/', router);
server.listen(port);
console.log('Server started on', port);

var io = require('socket.io')(server);
io.on('connect', function(socket) {
  stream.on('tweet', function(tweet) {
    socket.emit('tweets', tweet);
  });
});
