import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My playlist");
  const [currTracks, setCurrTracks] = useState([]);

  const displayInfo = () => {
    const x = document.getElementById("#displayInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const handleAdd = (track) => {
    if (currTracks.some((t) => t.id === track.id)) {
      alert("You've already added this song to the playlist!");
      return;
    }
    setCurrTracks((prevTracks) => [...prevTracks, track]);
  };
  const handleRemove = useCallback((track) => {
    setCurrTracks((prevTracks) => prevTracks.filter((t) => t.id !== track.id));
  }, []);
  const onSearch = useCallback((userInput) => {
    Spotify.search(userInput).then(setSearchResults);
  }, []);
  const saveToSpotify = (e) => {
    e.preventDefault();
    const trackUris = currTracks.map((t) => t.uri);
    Spotify.onSave(trackUris, playlistName);
  };
  return (
    <div className="App">
      <Header displayInfo={displayInfo} />
      <SearchBar onSearch={onSearch} />
      <div style={{ display: "flex" }}>
        <SearchResults searchResults={searchResults} onAdd={handleAdd} />
        <Playlist
          name={playlistName}
          setPlaylistName={setPlaylistName}
          onRemove={handleRemove}
          tracks={currTracks}
          onSubmit={saveToSpotify}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
