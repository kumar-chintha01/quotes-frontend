import React, { useState, useContext, useEffect } from 'react'
import Styles from './Login.module.css'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext/UserContext.js'
import { useNavigate } from 'react-router-dom'

function Login() {

  const { setUser, userAuth, setUserAuth } = useContext(UserContext)
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log();
    if (userAuth)
      navigate('/')
  }, [])

  const navigate = useNavigate()

  function handleChange(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {

      e.preventDefault();

      if (loginInfo.email === "" || loginInfo.password === "") {
        alert("Enter Required Fields")
        return
      }

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!loginInfo.email.match(validRegex)) {
        alert("Invalid Email");
        return
      }

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, loginInfo);

      if (!response.data.status) {
        alert(response.data.error)
        return;
      }

      alert("Logged in Successfully");

      setUserAuth(true);
      setUser({ email: loginInfo.email })
      localStorage.setItem("user", loginInfo.email);
      setLoginInfo({
        email: '',
        password: '',
        repassword: ''
      })

      navigate("/")
    } catch (error) {
      if (error.response.status == 401)
        setUserAuth(false)
    }

  }


  return (
    <div className={Styles['container']}>
      <img src='Computer login-pana.svg' />
      <div className={Styles['login-card']}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']} value={loginInfo.email} onChange={handleChange} />
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']} value={loginInfo.password} onChange={handleChange} />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login