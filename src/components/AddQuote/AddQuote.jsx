import React, { useState, useEffect } from 'react'
import Styles from "./AddQuote.module.css"
import axios from 'axios';

function AddQuote({ fun }) {

    const [data, setData] = useState({
        quote: "",
        genres: []
    })

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

    const handleGenre = (e) => {

        const genre = e.target.getAttribute("data-value").toLowerCase();

        setData((prev) => {
            const newGenres = prev.genres.includes(genre)
                ? prev.genres.filter((g) => g !== genre)
                : [...prev.genres, genre];

            return { ...prev, genres: newGenres };
        });

    };

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (data.quote === "" || data.genres.length === 0) {
                alert("Fill all the details")
                return
            }
            if (data.quote.split(" ").length <= 3) {
                alert("Quote should be minimum of 4 words")
                return
            }
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/quote/add-quote`, data)
            alert("Successfully added new quote")
            setData({ quote: "", genres: [] })
        } catch (error) {
            if (error.response.status == 401)
                setUserAuth(false)
        }
    }

    return (
        <div id={Styles['container']}>
            <div id={Styles['main']}>
                <div id={Styles['close']}>
                    <button onClick={() => fun(false)} >X</button>
                </div>
                <textarea name='quote' placeholder='Write your quote here...' onChange={handleChange} value={data.quote} />
                <h3>Genres</h3>
                <hr />
                <ul>
                    {genresArr.map((value, idx) => {
                        return <li
                            key={idx}
                            className={data.genres.includes(value.toLowerCase()) ? Styles['selected'] : ""}
                            data-value={value}
                            onClick={handleGenre}>
                            {value}
                        </li>
                    })}
                </ul>
                <div id={Styles['post']}>
                    <button onClick={handleSubmit} >Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddQuote