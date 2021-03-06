#Twitter Feeds
Search Twitter using the Twitter API, Socket.io, and Twit!

####[Deployed Demo](https://twitter-feeds-challenge.herokuapp.com/)

###Running The Program:
1. `git clone https://github.com/khowen/twitter-feeds`
2. `cd twitter-feeds`
3. `npm install`
4. [Twitter registration for keys](#register)
5. Open/create .zshrc file

  `subl ~/.zshrc` | `touch ~/.zshrc`

6. Add consumer and access token keys to the .zshrc file using this code and replacing APP KEY with registered keys.


  ```
  export PATH="$PATH:$HOME/.rvm/bin"
  # Add RVM to PATH for scripting

  export TWITTER_CONSUMER_KEY='APP_KEY'
  export TWITTER_CONSUMER_SECRET='APP_KEY'
  export TWITTER_ACCESS_TOKEN='APP_KEY'
  export TWITTER_ACCESS_TOKEN_SECRET='APP_KEY'
  ```

7. Before `npm start`, run `source ~/.zshrc` in terminal.(Note: This command **must** be run in the same terminal window as `npm start`.)
8. `npm start`
9. Navigate to localhost:3000

<a name="register"></a>
###Register for Twitter API keys:
1. [Twitter](https://apps.twitter.com) - Sign Up or Sign In
2. Create a new app.
  * **Title:** twitter-feeds
  * **Description:** Small app to stream tweets from Twitter.
  * **Website:** http://127.0.1.1
3. Select the "Keys & Access Tokens" tab.
  * Generate access tokens.

###Technologies Used:
![Node.js](http://global.download.synology.com/download/pkg_img/Node.js/0.12.6-0112/thumb_256.png)
![Socket.io](http://nodejs-cloud.com/img/128px/socketio.png)
![Heroku](http://cdn2.cloudpro.co.uk/sites/cloudprod7/files/logo-developer-heroku.png)
![Twitter API](https://www.apichangelog.com/static/img/logos/twitter-128.png)
![Express.js](https://webslinder.com/public/imgs/logo/express.png)
![HTML5](https://cdn0.iconfinder.com/data/icons/HTML5/128/HTML_Logo.png)
![CSS3](http://www.myiconfinder.com/uploads/iconsets/128-128-8b61de4c84033266e15317a6eb9fda2d-css3.png)
![Javascript](http://www.americanmediatraining.com/images/amt_javascriptbox.png)
![jQuery](http://antoniodelvalle.net/images/logos/jquery-logo.png)
Twit




