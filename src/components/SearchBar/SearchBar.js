import React, {useState, useEffect} from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState('');
    const handleChange = useEffect((e) => {
        setUserInput(e.target.value);
    }, []);
    const handleSubmit = useEffect((props) => {
        alert(`Searching for ${userInput}`);
        props.onSearch(userInput);
    }, [props.onSearch, userInput]);
    return (
        <form className={styles.input} onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;