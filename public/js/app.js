(function() {
  var socket = io();
  var error  = '';

  socket.on('tweets', function(tweet) {
    // console.log(tweet);
    var userImage = '<div class="profile-image"><img src="' + tweet.user_profile_image + '" /></div>';
    var userName = '<p class="user-name">' + tweet.name + '</p><p class="user-handle"> @' +tweet.screen_name + '</p>';
    var tweetText = '<p class="tweet-text">' + tweet.text + '</p>';
    var html = '<div class="tweet-wrapper">' +  userImage + '<span>' + userName + tweetText + '</span></div>';
    $('#tweet-container').prepend(html)
  });

  $('form').on('submit', function() {
    event.preventDefault();
    var search_term = $('input').val().toLowerCase();
    $('.error').text('');

    if(search_term === ' ') {
      error = 'Please enter a word to begin searching!';
      $('.error').text(error);
    }

    search_term.split(' ');
    socket.emit('updatedTerm', search_term);
  });

  socket.on('updatedTerm', function(searchTerm) {
    // $('h1').text('Twitter Search for ' + searchTerm);
    $('#user-search').val('');
  });
}());
