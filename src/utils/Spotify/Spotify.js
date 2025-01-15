let accessToken;
const clientID = "your-client-id-here";
const redirectURI = "http://localhost:5173/";
const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expirationInURL = window.location.href.match(/expires_in=([^&]*)/);
        if (tokenInURL && expirationInURL) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expirationInURL[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            .then(response => response.json())
            .then(jsonResponse => {
                if (!jsonResponse.tracks) return [];
                return jsonResponse.tracks.items.map(track => ({
                    ID: track.id,
                    Name: track.name,
                    Artist: track.artists[0].name,
                    Album: track.album.name,
                    URI: track.uri,
                }));
            });
    },
    savePlaylist(playlistName, trackURIs) {
        if (!playlistName || !trackURIs.length) return;
        const accessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };
        return fetch(`https://api.spotify.com/v1/me`, {
                headers: headers,
            })
            .then(response => response.json())
            .then(jsonResponse => {
                const userID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify({
                            name: playlistName
                        }),
                    })
                    .then(response =>
                        response.json()
                        .then(jsonResponse => {
                            const playlistID = jsonResponse.id;
                            return fetch(
                                `https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                                    headers: headers,
                                    method: "POST",
                                    body: JSON.stringify({
                                        uris: trackURIs
                                    }),
                                }
                            );
                        })
                    );
            });
    },
};
export default Spotify;