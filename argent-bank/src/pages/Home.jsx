import React from "react"
import NavHeader from "../components/NavHeader/NavHeader"
import Banner from "../components/Banner/Banner"
import Features from "../components/Features/Features"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </>
  )
}
