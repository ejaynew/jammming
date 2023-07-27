import React from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles.trackList}>
      {props.tracks.map((track) => (
        <div>
          <Track
            key={track.id}
            uid={track.uid}
            track={track}
            name={track.name}
            artist={track.artist}
            album={track.album}
            imageHref={track.imageHref}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        </div>
      ))}
    </div>
  );
}

export default TrackList;
