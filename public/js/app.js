(function() {
  var socket = io(); //initialize socket.io connection
  var error  = ''; //used for displaying errors to user

  //construct tweets to show user
  socket.on('tweets', function(tweet) {
    // console.log(tweet);
    var userImage = '<div class="profile-image"><img src="' + tweet.user_profile_image + '" alt="profile-image"/></div>';
    var userName = '<p class="user-name">' + tweet.name + '</p><p class="user-handle"> @' +tweet.screen_name + '</p>';
    var tweetText = '<p class="tweet-text">' + tweet.text + '</p>';
    var html = '<div class="tweet-wrapper">' +  userImage + '<span>' + userName + tweetText + '</span></div>';
    $('#tweet-container').prepend(html)
  });

  $('form').on('submit', function(e) {
    e.preventDefault();

    //search terms need to be lowercase
    var search_term = $('input').val().toLowerCase();

    //reset error message from previous submit on new submit
    $('.error').text('');

    //Whitespace will not error, but it also does not return any tweets
    //Inform user if they submitted whitespace only to search again.
    if(search_term === ' ') {
      error = 'Please enter a word to begin searching!';
      $('.error').text(error);
    }

    //split search term into array of words for Twit track params
    search_term.split(' ');
    socket.emit('updatedTerm', search_term);
  });

  socket.on('updatedTerm', function(searchTerm) {
    // $('h1').text('Twitter Search for ' + searchTerm);

    //reset input to '' after results returned
    $('#user-search').val('');
  });
}());
