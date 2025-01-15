import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const passTerm = () => {
    props.onSearch(term);
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={handleTermChange}
      />
      <button className={styles.SearchButton} onClick={passTerm}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;