import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../../store/slices/users/usersAPI"
import { selectUsers, toggleCurrentUser } from "../../store/slices/users/usersSlice"
import './SignIn.css'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser, usersData } = useSelector(selectUsers)
  console.log(currentUser);
  const formRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const {login: {value: login}, password: {value: password}} = formRef.current

    dispatch(toggleCurrentUser({login, password}))

    formRef.current.reset()
  }

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

    return (
        <>
  <div className="container">
    <div className="box">
      <div className="heading" />
      <form ref={formRef} onSubmit = {handleSubmit} className="login-form">
        <div className="field">
          <input
            name="login"
            id="username"
            defaultValue='bret'
            type="name"
            placeholder="Phone number, username, or email"
          />
          <label htmlFor="username">Phone number, username, or email</label>
        </div>
        <div className="field">
          <input name="password" id="password" type="password" defaultValue='gwenborough' placeholder="password" />
          <label htmlFor="password">Password</label>
        </div>
        <button className="login-button" title="login">
          Log In
        </button>
        <div className="separator">
          <div className="line" />
          <p>OR</p>
          <div className="line" />
        </div>
        <div className="other">
          <button className="fb-login-btn" type="button">
            <i className="fa fa-facebook-official fb-icon" />
            <span className="">Log in with Facebook</span>
          </button>
          <a className="forgot-password" href="#">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
    <div className="box">
      <p>
        Don't have an account?{" "}
        <a className="signup" href="#">
          Sign Up
        </a>
      </p>
    </div>
  </div>
</>
    )
}

export default SignIn