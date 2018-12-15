'use strict';

const express = require('express');
const path = require('path');
var SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('/test/:str', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  
  res.send(req.params);
});

app.get('/api/track/:track', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  
  console.log('Searching for: ' + req.params.track);
  // Do search using the access token
  spotifyApi.searchTracks('track:'+req.params.track).then(
    function(data) {
      res.send(data.body);
    },
    function(err) {
      console.log('Something went wrong! Trying to get new access token.', err);
      spotifyApi.clientCredentialsGrant();
      res.send(spotifyApi.searchTracks('track:'+req.params.track));
    }
  );
  // res.send(data.body);
});

var clientId = 'eea9884919bc419db2191097aa29e310',
  clientSecret = '774e96e969c54cdaa297faa70c97af7d';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});