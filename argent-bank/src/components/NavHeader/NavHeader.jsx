import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png"
import "./NavHeader.css"
import { useDispatch, useSelector } from "react-redux"
import * as login from "../../redux/login"
import * as authentication from "../../redux/authentication"
import * as update from "../../redux/updateProfile"

export default function Nav() {
  const dispatch = useDispatch()
  const isConnected = useSelector((state) => state.authentication.isConnected)
  const firstName = useSelector((state) => state.authentication.firstName)

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isConnected ? (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign in
          </Link>
        ) : (
          <Link
            to="/"
            className="main-nav-item"
            onClick={() => {
              dispatch(authentication.logout())
              dispatch(login.logout())
              dispatch(update.reset())
            }}
          >
            <i className="fa fa-user-circle"></i>
            {firstName ? firstName + "  " : null}
            <i class="fa fa-sign-out"></i>
            Sign out
          </Link>
        )}
      </div>
    </nav>
  )
}