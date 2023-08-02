import React, { useCallback } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const handleChange = useCallback((e) => {
    e.preventDefault();
    props.setUserInput(e.target.value);
  }, [props]);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      props.onSearch(props.userInput);
      props.setUserInput("");
    },
    [props]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        onChange={handleChange}
        value={props.userInput}
        className={styles.input}
      />
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
