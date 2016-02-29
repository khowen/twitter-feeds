var morgan  = require('morgan');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var router  = express.Router();
var server  = require('http').createServer(app);

app.set('views', './views');
app.set('view engine', 'jade');

//middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {
  res.render('index', { title: 'Twitter Search' });
});

app.use('/', router);
server.listen(port);
console.log('Server started on', port);

//integrate socket.io
var io = require('socket.io')(server);
var Twit    = require('twit');
var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
// console.log(twitter);
var stream;
var searchTerm;

stream = twitter.stream('statuses/filter', { track: 'cnn'});

//creates socket
io.on('connect', function(socket) {
  socket.on('updatedTerm', function(searchTerm) {
    socket.emit('updatedTerm', searchTerm);

    //stop stream if already running
    if(stream) {
      stream.stop();
    }

    stream = twitter.stream('statuses/filter', { track: searchTerm, language: 'en'});

    //gets info from Twitter
    stream.on('tweet', function(tweet) {
      var data = {};
      data.name = tweet.user.name;
      data.screen_name = tweet.user.screen_name;
      data.text = tweet.text;
      data.user_profile_image = tweet.user.profile_image_url;
      socket.emit('tweets', data); //send tweets to front end
    });
  });
});
