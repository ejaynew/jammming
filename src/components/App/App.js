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

  const dummyData = [
    {
      songName: "A Pearl",
      artistName: "Mitski",
      albumName: "Be the Cowboy",
      id: "7fd3aMiuwHWKsTdZafjOfZ?si=0fa1d221fb7d45e8",
    },
    {
      songName: "Lonesome Love",
      artistName: "Mitski",
      albumName: "Be the Cowboy",
      id: "3bjPPTMGBp8e36BYJaXDO2?si=941a4fb5568743df",
    },
    {
      songName: "Nobody",
      artistName: "Mitski",
      albumName: "Be the Cowboy",
      id: "2P5yIMu2DNeMXTyOANKS6k?si=7354fcae42954ba2",
    },
  ];

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
    const trackIds = currTracks.map((t) => t.id);
    alert(
      `Saving ${playlistName} to spotify... Playlist ids are: ${trackIds}... Done!`
    );
  };
  return (
    <div className="App">
      <Header displayInfo={displayInfo} />
      <SearchBar onSearch={onSearch} />
      <SearchResults searchResults={searchResults} onAdd={handleAdd} />
      <Playlist
        name={playlistName}
        setPlaylistName={setPlaylistName}
        onRemove={handleRemove}
        tracks={currTracks}
        onSubmit={saveToSpotify}
      />
      <Footer />
    </div>
  );
}

export default App;
