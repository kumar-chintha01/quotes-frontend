import React, { useContext, useEffect, useState } from "react";
import Styles from "./Quotes.module.css";
import Card from "../../components/Card/Card.jsx";
import Filter from "../../components/VerticalFilter/VerticalFilter.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext/UserContext.js";

function Quotes() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [quotes, setQuotes] = useState([]);

  const { setUserAuth, setUser } = useContext(UserContext)
  const navigate = useNavigate()


  useEffect(() => {
    fetchQuotes()
  }, [searchParams])

  async function fetchQuotes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/quote/quotes?search=${searchParams.get('search')}&genre=${searchParams.get('genre')}&sortby=${searchParams.get('sortby')}`);

      console.log(response);

      setQuotes(response.data);

    } catch (error) {
      if (error.response.status == 401) {
        setUserAuth(false)
        navigate('/')
      }
    }
  }

  return (
    <div id={Styles["wrapper"]}>
      <div id={Styles["container"]}>
        <div>
          <SearchBar />
        </div>

        <div id={Styles['section']}>
          <div id={Styles['filter']}>
            <Filter />
          </div>
          <div id={Styles['cards']}>
            {
              quotes.map((item) => (
                <Card key={item._id} text={item.quote} author={item.author.email} id={item._id} likes={item.liked_by.length} liked={item.isLiked}></Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
