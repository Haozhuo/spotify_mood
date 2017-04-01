var emotion = {
    "anger": {

        "min_loudness":-25.0,
        "max_valence":0.35,
        "min_tempo":110.0,
        "min_daceability":0.50,
        "min_energy":0.70,
        "min_popularity":40

    },
    "contempt": {

        "max_valence":0.79,
        "min_valence":0.40,
        "max_valence":0.79,
        "max_tempo":95.0,
        "min_tempo":75.0,
        "max_danceability":0.69,
        "min_daceability":0.35,
        "max_energy":0.7,
        "min_energy":0.45,
        "min_popularity":40

    },
    "disgust": {

        "max_valence":0.79,
        "min_valence":0.40,
        "max_valence":0.79,
        "max_tempo":95.0,
        "min_tempo":75.0,
        "max_danceability":0.69,
        "min_daceability":0.35,
        "max_energy":0.7,
        "min_energy":0.45,
        "min_popularity":40

    },
    "fear": {

        "max_valence":0.39,
        "max_tempo":95.0,
        "max_danceability":0.35,
        "max_energy":0.40,
        "min_popularity":20,
        "min_instrumentalness":0.6,
        "mode":0

    },
    "happiness": {

        "min_valence":0.80,
        "min_tempo":95.0,
        "min_danceability":0.7,
        "min_energy":0.7,
        "mode":1,
        "min_popularity":75

    },
    "neutral": {

        "max_valence":0.79,
        "min_valence":0.40,
        "max_valence":0.79,
        "max_tempo":95.0,
        "min_tempo":75.0,
        "max_danceability":0.69,
        "min_daceability":0.35,
        "max_energy":0.7,
        "min_energy":0.45,
        "min_popularity":40

    },
    "sadness": {

        "max_valence":0.39,
        "max_tempo":95.0,
        "max_danceability":0.35,
        "max_energy":0.40,
        "min_popularity":20,
        "min_instrumentalness":0.6,
        "mode":0

    },
    "surprise": {

        "min_valence":0.80,
        "min_tempo":95.0,
        "min_danceability":0.7,
        "min_energy":0.7,
        "mode":1,
        "min_popularity":75

    }
}


var request = require('request'); // "Request" library

var client_id = '8d2ded45568440c8b4e4660c226d922e';
var client_secret = '251d40faafd24da3976fe03a14b478d8';

var getSongs = function(mood){
    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var recommend_url  = "https://api.spotify.com/v1/recommendations" + "?";

        for(var attr in emotion[mood]){
            recommend_url += (attr+"="+emotion[mood][attr] +"&");
        }

        recommend_url += "market=US";
        console.log(recommend_url);
        console.log(body.access_token);

        var options = {
          url: recommend_url,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, function(error, response, body) {
          console.log(body);
        });
      }
    });
}

getSongs("neutral");



module.export = {
    music_params:emotion,
    getSongs:getSongs
}
