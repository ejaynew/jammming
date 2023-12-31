import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Spotify from "../../util/Spotify";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My playlist");
  const [currTracks, setCurrTracks] = useState([]);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("previous-search-term");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
    return () => {
      localStorage.removeItem("previous-search-term");
    }
  }, []);

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
    const targetElement = document.getElementById("searchResults");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const saveToSpotify = (e) => {
    e.preventDefault();
    const trackUris = currTracks.map((t) => t.uri);
    Spotify.onSave(trackUris, playlistName);
  };
  return (
    <div className="App">
      <Header displayInfo={displayInfo} />
      <SearchBar
        userInput={searchTerm}
        setUserInput={setSearchTerm}
        onSearch={onSearch}
      />
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
