import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
// import About from "./Sections/About";
import Banners from "./Sections/Banners";
import BestWork from "./Sections/BestWork";
import Skills from "./Sections/Skills";
const Home = () => {
  // const
  return (
    <div className="">
      <Banners />
      <About/>
      <Skills />
      <BestWork />
      <Contact/>
    </div>
  );
};

export default Home;
