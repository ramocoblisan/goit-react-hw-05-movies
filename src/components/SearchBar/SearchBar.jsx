import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) =>{
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery(""); 
    }

    return(
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
           <div className={styles.inputWrapper}>
    <input 
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name='query'
        value={query}
        onChange={handleChange}
        className={styles.inputForm}
    />
    <button type="submit" className={styles.formBtn}>
        <IoIosSearch className={styles.iconForm}/>
    </button>
    </div>
        </form>
    )
}

export default SearchBar;