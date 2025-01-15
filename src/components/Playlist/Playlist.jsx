import React from "react";
import TrackList from "../TrackList/TrackList.jsx";
import styles from "./Playlist.module.css";

function Playlist(props) {
  const handleNameChange = e => {
    props.onNameChange(e.target.value);
  };
  return (
    <div className={styles.Playlist}>
      <input value={props.playlistName} onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className={styles["Playlist-save"]} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;