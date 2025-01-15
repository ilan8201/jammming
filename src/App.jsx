import React, { useState, useCallback } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import Playlist from "./components/Playlist/Playlist.jsx";
import Spotify from "./utils/Spotify/Spotify.js";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = track => {
    playlistTracks.find(t => t.ID === track.ID)
      ? console.log("Track already in playlist")
      : setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = track => {
    setPlaylistTracks(playlistTracks.filter(t => t.ID !== track.ID));
  };

  const updatePlaylistName = name => {
    setPlaylistName(name);
  };
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.URI);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };
  const search = useCallback(term => {
    Spotify.search(term).then(setSearchResults);
  }, []);
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles["App-playlist"]}>
          <SearchResults
            userSearchResults={searchResults}
            onAdd={addTrack}
            playlistTracks={playlistTracks}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;