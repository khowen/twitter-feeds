(function() {
  var socket = io();

  socket.on('tweets', function(tweet) {
    var html = '<div><img src="' + tweet.user_profile_image + '" /><div>' + tweet.name + ' @' +tweet.screen_name + ' ' + tweet.text + '</div>'
    $('#tweet-container').prepend(html)
  });

  $('form').on('submit', function() {
    event.preventDefault();
    var search_term = $('input').val().toLowerCase();
    socket.emit('updatedTerm', search_term);
  });

  socket.on('updatedTerm', function(searchTerm) {
    $('h1').text('Twitter Search for ' + searchTerm);
    $('#user-search').val('');
  });
}());
