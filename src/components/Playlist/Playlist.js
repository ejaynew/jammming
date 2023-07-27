import React, {useCallback} from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist(props) {
  const handleChange = useCallback((e) => {
    props.setPlaylistName(e.target.value);
  }, [props.name])
  return (
    <div id="Playlist" className={styles.container}>
      <form onSubmit={props.onSubmit}>
        <h1><input className={styles.input} onChange={handleChange} value={props.name} /></h1>
        <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={true} />
        <button className={styles.button} type="submit">Save to Spotify</button>
      </form>
    </div>
  );
}

export default Playlist;
