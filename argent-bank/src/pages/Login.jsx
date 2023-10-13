import React, { useState } from "react"
import NavHeader from "../components/NavHeader/NavHeader"
import Footer from "../components/Footer/Footer"
import "../styles/login.css"
import { useNavigate } from "react-router-dom";
import { useDispatch,  useStore} from "react-redux"
import * as login from "../redux/login"
import * as authentication from "../redux/authentication"
import { loginUser, fetchUserProfile } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logError = false, setLogError] = useState('')
  const store = useStore()
  const dispatch = useDispatch()

   const handleLogin = async (e) => {
     e.preventDefault()
     try {
      const token = await loginUser(email, password); 
      dispatch(login.success(token));
    } catch (error) {
      setLogError(true);
      dispatch(login.logout());
    }
  };

 
   const handleRedirection = async (e) => {
     await handleLogin(e)
     const token = store.getState().login.token
     try {
      const data = await fetchUserProfile(token);
      dispatch(authentication.success(data));
      navigate("/profile");
    } catch (error) {
      dispatch(authentication.logout());
    }
  };

  return (
    <>
      <NavHeader />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              className="sign-in-button"
              onClick={(e) => handleRedirection(e)}
            >
              Sign In
            </button>
          </form>
          {logError ? (
            <div className="sign-in-error-msg">
              Identifiant ou mot de passe incorrect
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  )
}