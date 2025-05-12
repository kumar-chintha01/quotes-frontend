import React, { useState, useEffect } from "react";
import Styles from "./VerticalFilter.module.css";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [genresArr, setGenresArr] = useState([
    "motivational",
    "love",
    "sad",
    "friendship",
    "happy",
    "Anime",
    "Movies",
    "Devotional",
  ]);

  const [randNum, setRandNum] = useState([]);

  useEffect(() => {
    setRandNum(genresArr.map((val, idx) => Math.random() > 0.5));
  }, []);

  const sortBy = ["Latest", "Oldest", "Most-liked"];

  const handleGenre = (e) => {
    const newGenre = e.target.getAttribute("data-value").toLowerCase();
    setSearchParams((prevParams) => {
      prevParams.set("genre", newGenre);
      return prevParams;
    }, { replace: true });
  };

  const handleSortBy = (e) => {
    const newSortBy = e.target.value.toLowerCase();
    setSearchParams((prevParams) => {
      prevParams.set("sortby", newSortBy);
      return prevParams;
    }, { replace: true });
  };

  return (
    <div id={Styles["container"]}>
      <section id={Styles["genres"]}>
        <h3>Genres</h3>
        <hr />
        <ul>
          {genresArr.map((value, idx) => (
            <li
              key={idx}
              className={
                Styles["genre-items"] +
                " " +
                (randNum[idx] ? Styles["rand"] : "") +
                " " +
                (searchParams.get("genre") === value.toLowerCase()
                  ? randNum[idx]
                    ? Styles["rand-select"]
                    : Styles["select"]
                  : "")
              }
              data-value={value}
              onClick={handleGenre}
            >
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section id={Styles["sortby"]}>
        <h3>Sort-By</h3>
        <hr />
        {sortBy.map((value, idx) => (
          <label
            htmlFor={Styles[value]}
            key={idx}
            className={Styles["sortby-items"]}
          >
            <input
              type="radio"
              id={Styles[value]}
              name="sortby"
              value={value}
              onClick={handleSortBy}
              checked={searchParams.get('sortby') == value.toLowerCase()}
            />

            {value}
          </label>
        ))}
      </section>

      <button onClick={() => setSearchParams({}, { replace: true })}>Clear</button>

    </div>
  );
}

export default Filter;
