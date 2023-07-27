import React, { useCallback } from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.h1}>
          Ja<em>mmm</em>ing
        </h1>
        <button className={styles.infoBtn} onClick={props.displayInfo}>
          i
        </button>
      </div>
      <div className={styles.info} id="#displayInfo">
        <button className={styles.closeBtn} onClick={props.displayInfo}>
          x
        </button>
        <h1>Welcome to my&nbsp;app!</h1>
        <p>
          Start by searching for an artist, album, or song title in the search
          box, after which you will be asked to login with&nbsp;Spotify.
          <br />
          Next scroll down and you'll see your search results to the left. Click
          on the "+ Add to playlist" button to add to your playlist, which you
          can see on the right. You can also change the playlist name on the
          &nbsp;right.
          <br />
          Finally, you can save your playlist to spotify using the "Save to
          Spotify"&nbsp;button.
          <br />
          To see these instructions again, just click on the "i" button in the
          &nbsp;header.
        </p>
      </div>
    </div>
  );
}

export default Header;
