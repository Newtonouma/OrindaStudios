
import React from "react";
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Story from "./Story/Story"
import Footer from "./Footer/Footer"
import Display from "./Work-display/Display";
import Galary from "./Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";
import Textcarousel from "./Textcarousel/TextCarousel"
import PhotographyCTA from "./PhotographyCta/PhotographyCTA";




function App() {
  
  return (
    <>
      <Navbar/>
      <Header />
      <Story/>
      <Textcarousel/>
      <Galary/>
      <PhotographyCTA/>
      <Testimonials/>
      <Footer />
      
     
    </>  

  )
}

export default App

