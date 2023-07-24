import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Tracklist from '../TrackList/TrackList.js';
import Track from '../Track/Track.js';

function App() {
  const onSearch = (userInput) => {
    alert(`Searching for ${userInput} at the App level.`)
  }
  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;
