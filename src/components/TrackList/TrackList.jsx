import React from "react";
import Track from "../Track/Track.jsx";
import styles from "./TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles.TrackList}>
      {props.tracks.map(track => (
        <Track
          track={track}
          key={track.ID}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}
          playlistTracks={props.playlistTracks}
        />
      ))}
    </div>
  );
}

export default TrackList;