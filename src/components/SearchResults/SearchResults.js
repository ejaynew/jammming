import React from "react";
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
