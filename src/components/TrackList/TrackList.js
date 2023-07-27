import React from "react";
import Track from "../Track/Track";

function TrackList(props) {
  return (
    <div>
      {props.tracks.map((track) => (
        <div>
          <Track
            key={track.id}
            uid={track.uid}
            track={track}
            name={track.name}
            artist={track.artist}
            album={track.album}
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
