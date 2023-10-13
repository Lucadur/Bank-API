import React, { useState} from "react";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";
import NavHeader from "../components/NavHeader/NavHeader";
import "../styles/profile.css";
import { useDispatch, useSelector } from "react-redux";
import * as authentication from "../redux/authentication";
import * as update from "../redux/updateProfile";
import { updateUserName } from "../utils/api";

export default function Profile() {
  const dispatch = useDispatch()
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [emptyField, setEmptyField] = useState()
  const [editBtnClass, setEditBtnClass] = useState("edit-button");
  const [updateFormClass, setUpdateFormClass] = useState("update-form");
  const firstName = useSelector((state) => state.authentication.firstName)
  const lastName = useSelector((state) => state.authentication.lastName)
  const token = useSelector((state) => state.login.token)

  const updateProfile = async (e) => {
    e.preventDefault();
    if (!newFirstName || !newLastName) {
      setEmptyField(true);
      return;
    } else {
      try {
        const data = await updateUserName(token, newFirstName, newLastName); 
        dispatch(update.success(data));
        dispatch(authentication.update(data));
        dispatch(update.reset());
        setEmptyField(false);
        handleModalClose();
      } catch (error) {
      }
    }
    setNewFirstName("");
    setNewLastName("");
  };

  const handleModalOpen = () => {
    setEditBtnClass("edit-button hide")
    setUpdateFormClass("update-form show")
  }

  const handleModalClose = (e = null) => {
    if (e) {
      e.preventDefault()
    }
    setEmptyField(false)
    setEditBtnClass("edit-button show")
    setUpdateFormClass("update-form hide")
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
  }



  return token ? (
    <>
      <NavHeader />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName}
          </h1>
          <button className={editBtnClass} onClick={handleModalOpen}>
            Edit Name
          </button>
          <form className={updateFormClass}>
            <div className="input-wrapper-container">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="firstName"
                  placeholder={firstName}
                  onChange={(e) =>
                    setNewFirstName(e.target.value.replace(/\s/g, ""))
                  }
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="lastName"
                  placeholder={lastName}
                  onChange={(e) =>
                    setNewLastName(e.target.value.replace(/\s/g, ""))
                  }
                />
              </div>
            </div>
            <div className="sign-in-btn-container">
              <button
                className="sign-in-button"
                onClick={(e) => updateProfile(e)} 
              >
                Save
              </button>
              <button
                className="sign-in-button"
                onClick={(e) => {
                  handleModalClose(e)
                }}
              >
                Cancel
              </button>
            </div>
          </form>
          {emptyField ? (
            <div className="error-msg">Remplir le/les champ(s) vide(s)</div>
          ) : null}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="" amount="" />
        <Account title="" amount="" />
        <Account title="" amount="" />
      </main>
      <Footer />
    </>
  ) : (
    <>
      <NavHeader />
      <main className="main bg-dark">
        <div className="profile-error-container">
          <div className="profile-error">
            Veuillez vous connecter pour accéder à votre profil
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}