import React, { useCallback } from "react";
import styles from "./Track.module.css";

function Track(props) {

  const handleAdd = useCallback(
    () => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const handleRemove = useCallback(
    () => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderButton = useCallback(() => {
    if (props.isRemoval) {
      return <button onClick={handleRemove}>- Remove from playlist</button>;
    } else {
      return <button onClick={handleAdd}>+ Add to playlist</button>;
    }
  }, [props.onRemove, props.onAdd]);

  return (
    <div>
      <div className={styles.card}>
        <div className="container" id={props.id}>
          <h4>
            {props.songName} <em>by {props.artistName}</em>
          </h4>
          <h5>{props.albumName}</h5>
          {renderButton()}
        </div>
      </div>
    </div>
  );
}

export default Track;
