import React from "react";
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
        <h2 className={styles.h2}>Welcome!</h2>
        <ol className={styles.ol}>
          <li>
            <strong>Search by song</strong> in the search box&nbsp;below.
          </li>
          <li>
            <strong>Login</strong> with&nbsp;Spotify.
          </li>
          <li>
            <strong>Add songs to your playlist</strong> by click on the "+"
            button next to each&nbsp;track.
          </li>
          <li>
            <strong>Name your playlist</strong> on the top of the&nbsp;form.
          </li>
          <li>
            <strong>Save your playlist</strong> using the button at the bottom
            of the&nbsp;form.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
