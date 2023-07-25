import React, { useState, useCallback } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [userInput, setUserInput] = useState("");
  const handleChange = useCallback((e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      props.onSearch(userInput);
      setUserInput("");
    },
    [props.onSearch, userInput]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        className={styles.input}
      />
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
