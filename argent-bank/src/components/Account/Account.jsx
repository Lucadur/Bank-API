import React from "react"
import "./Account.css"

export default function Account() {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-number">Argent Bank Checking (x8349)</h3>
        <p className="account-balance">$2,082.79</p>
        <p className="account-balance-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}