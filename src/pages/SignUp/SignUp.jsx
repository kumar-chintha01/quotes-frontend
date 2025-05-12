import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Styles from './SignUp.module.css'
import { UserContext } from '../../Context/UserContext/UserContext.js'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const { setUser, userAuth, setUserAuth } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userAuth)
      navigate("/")
  }, [])

  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    repassword: ''
  })

  function handleChange(e) {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {

      e.preventDefault();

      if (signupInfo.email === "" || signupInfo.password === "" || signupInfo.repassword === "") {
        alert("Enter Required Fields")
        return
      }

      if (signupInfo.password !== signupInfo.repassword) {
        alert("Password doesn't match")
        return
      }

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!signupInfo.email.match(validRegex)) {
        alert("Invalid Email");
        return
      }

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`, signupInfo);

      if (!response.data.status) {
        alert(response.data.error)
        return;
      }

      alert("Account created Successfully");

      setSignupInfo({
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
      <img src='signup.svg' />
      <div className={Styles['signup-card']}>
        <h2>Sign Up</h2>
        <form>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']} onChange={handleChange} value={signupInfo.email} />
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']} onChange={handleChange} value={signupInfo.password} />
          <input type="password" name="repassword" placeholder='Enter Your Password Again' id={Styles['password']} onChange={handleChange} value={signupInfo.repassword} />
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>


    </div>
  )
}

export default SignUp