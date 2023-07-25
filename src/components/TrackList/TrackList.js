import React from "react";
import Track from "../Track/Track";

function TrackList(props) {
  return (
    <div>
      {props.tracks.map((track) => (
        <div>
          <Track
            key={track.id}
            track={track}
            songName={track.songName}
            artistName={track.artistName}
            albumName={track.albumName}
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
