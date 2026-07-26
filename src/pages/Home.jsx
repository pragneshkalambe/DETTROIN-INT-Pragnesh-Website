import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Academics/>
    <About/>
    <Gallery/>
    <News/>
    <Footer/>
    </>
  )
}

export default Home