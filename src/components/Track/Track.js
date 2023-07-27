import React, { useCallback } from "react";
import styles from "./Track.module.css";

function Track(props) {
  const handleAdd = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track]);

  const handleRemove = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track]);

  const renderButton = useCallback(() => {
    if (props.isRemoval) {
      return <button onClick={handleRemove} className={styles.removalBtn}>-</button>;
    } else {
      return <button onClick={handleAdd} className={styles.removalBtn}>+</button>;
    }
  }, [props.onRemove, props.onAdd]);

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            src={props.imageHref}
            className={styles.img}
            alt={`Album art for ${props.album}`}
          />
        </div>
        <div className={styles.textContainer}>
          <h4>
            {props.name} <em>by {props.artist}</em>
          </h4>
          <h5>{props.album}</h5>
        </div>
        <div className={styles.removalBtn}>{renderButton()}</div>
      </div>
    </div>
  );
}

export default Track;
