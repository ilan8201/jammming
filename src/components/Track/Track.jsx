import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  const isTrackInPlaylist = props.playlistTracks
    ? props.playlistTracks.some(
        playlistTrack => playlistTrack.ID === props.track.ID
      )
    : false;

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className={styles["Track-action"]} onClick={passTrackToRemove}>
          -
        </button>
      );
    } else if (isTrackInPlaylist) {
      return (
        <button className={styles["Track-action-disabled"]} disabled>
          Added
        </button>
      );
    } else {
      return (
        <button className={styles["Track-action"]} onClick={passTrack}>
          +
        </button>
      );
    }
  };

  const passTrack = () => {
    props.onAdd(props.track);
  };

  const passTrackToRemove = () => {
    props.onRemove(props.track);
  };

  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        <h3>{props.track.Name}</h3>
        <p>
          {props.track.Artist} | {props.track.Album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;