import React from "react";
import TrackList from "../TrackList/TrackList.jsx";
import styles from "./SearchResults.module.css";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      <TrackList
        tracks={props.userSearchResults}
        onAdd={props.onAdd}
        isRemoval={false}
        playlistTracks={props.playlistTracks}
      />
    </div>
  );
}

export default SearchResults;