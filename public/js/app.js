(function() {
  var socket = io();

  socket.on('tweets', function(tweet) {
    console.log(tweet);
    var userImage = '<div class="profile-image"><img src="' + tweet.user_profile_image + '" /></div>';
    var userName = '<p class="user-name">' + tweet.name + '</p><p class="user-handle"> @' +tweet.screen_name + '</p>';
    var tweetText = '<p class="tweet-text">' + tweet.text + '</p>';
    var html = '<div class="tweet-wrapper">' + userName + tweetText + userImage + '</div>';
    $('#tweet-container').prepend(html)
  });

  $('form').on('submit', function() {
    event.preventDefault();
    var search_term = $('input').val().toLowerCase();
    search_term.split(' ');
    socket.emit('updatedTerm', search_term);
  });

  socket.on('updatedTerm', function(searchTerm) {
    $('h1').text('Twitter Search for ' + searchTerm);
    $('#user-search').val('');
  });
}());
