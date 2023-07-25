import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

const SearchResults = (props) => {
  return (
    <div className={styles.container}>
      <h3>Search Results</h3>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
};

export default SearchResults;
