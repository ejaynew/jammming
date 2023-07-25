import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.h1}>
          Ja<em>mmm</em>ing
        </h1>
        <button className={styles} onClick={props.displayInfo}>
          i
        </button>
      </div>
      <div className={styles.info} id="#displayInfo">
        <button className={styles.closeBtn} onClick={props.displayInfo}>
          x
        </button>
        <h1>Welcome to my app!</h1>
        <p>
          Start by searching for an artist or song title in the search box.
          <br />
          Next scroll down and you'll see your search results to the left. Click
          on the "+ Add to playlist" button to add to your playlist, which you
          can see on the right. On the top right, you can also change the
          playlist name.
          <br />
          Finally, you can save your playlist to spotify using the "Save to
          Spotify" button.
          <br />
          To see these instructions again, just click on the "i" button in the
          top right corner.
        </p>
      </div>
    </div>
  );
}

export default Header;
