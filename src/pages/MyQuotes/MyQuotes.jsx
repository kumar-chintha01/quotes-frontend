import React, { useContext, useEffect, useState } from 'react'
import Styles from './MyQuotes.module.css'
import Filter from '../../components/HorizontalFilter/HorizontalFilter.jsx';
import Card from "../../components/Card/Card.jsx"
import AddQuote from '../../components/AddQuote/AddQuote.jsx';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext/UserContext.js';
import { useNavigate, useSearchParams } from 'react-router-dom';

function MyQuotes() {

  const [addQuote, setAddQuote] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const { user, setUserAuth } = useContext(UserContext)
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate()


  useEffect(() => {
    fetchQuotes()
  }, [searchParams])

  async function fetchQuotes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/quote/my-quotes?user=${user.email}&sortby=${searchParams.get("sortby")}&genre=${searchParams.get("genre")}`)

      setQuotes(response.data)

    } catch (error) {
      if (error.response.status == 401) {
        console.log("came");
        setUserAuth(false)
        navigate('/')
      }
    }
  }

  return (
    <div id={Styles['container']}>

      <div id={Styles['wrapper']}>

        <div id={Styles['menu']}>
          <Filter />
          <button id={Styles['add-btn']} onClick={() => setAddQuote(!addQuote)}>Add new Quote +</button>
        </div>

        {(addQuote && <AddQuote fun={setAddQuote} />)}

        <div id={Styles['cards-wrapper']}>
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
  )
}

export default MyQuotes