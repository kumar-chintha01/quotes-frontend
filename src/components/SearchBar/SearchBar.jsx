import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from 'react-router-dom';
import Styles from "./SearchBar.module.css";

function Search() {
    const [searchParam, setSearchParam] = useSearchParams();

    const handleChange = (e) => {
        setSearchParam((prev) => {
            prev.set("search", e.target.value);
            return prev;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchParam.get("search"));
    }

    return (
        <div id={Styles['search-bar']}>
            <label className={Styles['wrapper']}>
                <FiSearch color='grey' size="25" />
                <input type='search' placeholder='Type here to search' value={searchParam.has("search") ? searchParam.get("search") : ""} onChange={handleChange} maxLength="50" onKeyDown={(e) => { e.key === "Enter" ? handleSubmit(e) : handleChange(e) }} />
            </label>
            <button type='submit' onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Search