import React, { useContext, useState } from "react";
import Styles from "./Card.module.css";
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { UserContext } from "../../Context/UserContext/UserContext.js"


function Card({ text, author, liked, id, likes = 0 }) {

  const [isliked, setIsLiked] = useState(liked)
  const [likeCount, setLikeCount] = useState(likes)
  const { user } = useContext(UserContext);

  async function handleLike(e) {
    try {
      setIsLiked(true)
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/quote/like`, {
        id: id,
        user: user.email
      })
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 401)
        setUserAuth(false)
    }
  }

  async function handleDisLike(e) {
    try {
      setIsLiked(false)
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/quote/dislike`, {
        id: id,
        user: user.email
      })
      setLikeCount(likeCount - 1);
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 401)
        setUserAuth(false)
    }
  }

  return (
    <div className={Styles["container"]}>

      <p className={Styles["quote"]}>" {text} "</p>

      <div className={Styles["wrapper"]}>

        <div className={Styles["icons"]}>

          <div className={Styles['like']} onClick={isliked ? handleDisLike : handleLike}>
            {isliked ?
              <FaHeart size={15} color="red" /> :
              <FaHeart size={15} color="rgba(73, 72, 72, 0.9)" />
            }
            {likeCount}
          </div>

          <div className={Styles['share']}>
            <IoIosShareAlt size={20} color="rgba(255, 255, 255, 0.581)" />
          </div>

        </div>

        <div>
          <p className={Styles["author"]}>@{author ? author.split("@")[0] : ""}</p>
        </div>

      </div>

    </div>
  );
}

export default Card;
