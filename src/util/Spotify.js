var client_id = "bf91227dcbb5454eade8977173db1224";
var redirect_uri = "https://storied-cuchufli-6f6a35.netlify.app/";
// var redirect_uri = "https://storied-cuchufli-6f6a35.netlify.app/";
var stateKey = "spotify_auth_state";

const Spotify = {
  generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  },
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  },
  getAccessToken() {
    var params = Spotify.getHashParams();

    var access_token = params.access_token,
      expires_in = params.expires_in,
      state = params.state,
      storedState = localStorage.getItem(stateKey);

    if (access_token && (state == null || state !== storedState)) {
      alert("There was an error during the authentication");
    } else if (access_token && expires_in) {
      setTimeout(() => {
        access_token = null;
        window.history.replaceState({}, document.title, "/");
      }, expires_in * 1000);
      return access_token;
    } else {
      state = Spotify.generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope =
        "user-read-private user-read-email playlist-modify-public playlist-modify-private";
      var url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      url += "&state=" + encodeURIComponent(state);
      url += "&show_dialog=" + encodeURIComponent(true);

      window.location = url;
    }
  },
  async search(userInput) {
    const accessToken = Spotify.getAccessToken();
    try {
      return fetch(
        `https://api.spotify.com/v1/search?type=track&q=${userInput}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
            imageHref: track.album.images[0].url,
          }));
        });
    } catch {
      alert(
        "An error occurred when searching Spotify. Please reload the page to get a new authentication token!"
      );
    }
  },
  async onSave(trackUris, playlistName) {
    if (!playlistName) {
      alert("Please add a playlist name before saving!");
      return;
    } else if (!trackUris.length) {
      alert("Please add some tracks to the playlist before saving!");
      return;
    }
    let playlistId;
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      return fetch(`https://api.spotify.com/v1/me`, {
        headers: headers,
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          const userId = jsonResponse.id;
          const defaultDescription = "Created with Jammming!";
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify({
              name: playlistName,
              description: defaultDescription,
              public: false,
            }),
          });
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
          playlistId = jsonResponse.id;
          return fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ uris: trackUris }),
            }
          );
        })
        .then(() => {
          return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: headers,
          });
        })
        .then((response) => response.json())
        .then((jsonResponse) =>
          alert(
            `Done! Check it out here: ${jsonResponse.external_urls.spotify}`
          )
        );
    } catch {
      alert(
        "An error occurred when saving the playlist. Please reload the page to get a new authentication token!"
      );
    }
  },
};

export default Spotify;
