import React from "react";
import Header from "../Header/Header";
import Story from "../Story/Story";
import Textcarousel from "../Textcarousel/TextCarousel";
import Galary from "../Gallery/Gallery";
import PhotographyCTA from "../PhotographyCta/PhotographyCTA";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Story />
      <Textcarousel />
      <Galary />
      <PhotographyCTA />
      <Testimonials />
    </>
  );
}

export default Home;
