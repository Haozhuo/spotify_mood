# spotify_mood
LA Hack, Hymnia, built with Colin Yang (https://github.com/colinxy) and Zhouheng Sun (https://github.com/onionhoney).

For more information about this app, check out https://devpost.com/software/hymnia.

This is a NodeJS script that receives data from Microsoft emotion API and try to query Spotify API to get the song that
best fits user's current mood. It uses 3 major APIs of Spotify.
1. Spotify access token API
2. Spotify playlist API
3. Spotify recommendation API: https://api.spotify.com/v1/recommendations?<query_strings>
