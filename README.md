#Twitter Feeds
Search Twitter using the Twitter API, Socket.io, and Twit!

###Deployed Demo:
`![Twitter Feed Demo - Heroku](https://twitter-feeds-challenge.herokuapp.com/)`

###Running The Program:
1. Git clone https://github.com/khowen/twitter-feeds
2. npm install
3. Twitter registration for keys*
4. Add keys to your .zshrc file
5. src ~/.zshrc before starting app
6. start app(nodemon, npm start, etc.)

###Register for Twitter API keys.
1. [Twitter](https://apps.twitter.com) - Sign Up or Sign In
2. Create a new app.
  * **Title:** twitter-feeds
  * **Description:** Small app to stream tweets from Twitter.
  * **Website:** http://127.0.1.1
3. Select the "Keys & Access Tokens" tab.
  * Generate your access tokens.
4. Open/create your .zshrc file

  `open ~/.zshrc`

5. Add your consumer and access token keys to the .zshrc file.


```
export PATH="$PATH:$HOME/.rvm/bin"
# Add RVM to PATH for scripting

export TWITTER_CONSUMER_KEY=''
export TWITTER_CONSUMER_SECRET=''
export TWITTER_ACCESS_TOKEN=''
export TWITTER_ACCESS_TOKEN_SECRET=''
```

7. Inside the twitter-feeds directory, `npm install`.
8. `npm start`
9. Navigate to localhost:3000

###Technologies Used:
![Node.js](http://global.download.synology.com/download/pkg_img/Node.js/0.12.6-0112/thumb_256.png)
![Socket.io](http://nodejs-cloud.com/img/128px/socketio.png)
![Heroku](http://cdn2.cloudpro.co.uk/sites/cloudprod7/files/logo-developer-heroku.png)
![Twitter API](https://www.apichangelog.com/static/img/logos/twitter-128.png)
![Express.js](https://webslinder.com/public/imgs/logo/express.png)
Twit




