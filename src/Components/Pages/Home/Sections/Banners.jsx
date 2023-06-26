import bg from "../../../../assest/cool-background.png";
import React from "react";
import Typewriter from "typewriter-effect";
import bannerImg from "../../../../assest/bannerImg.svg";
import "./Banner.css";

const Banners = () => {
  return (
    <div className="p-5 sm:text-center ">
      {/* style={{ background: `url(${bg})`, opacity: "0.7" }} */}
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
          <div>
            <div
              className=" md:text-start lg:text-start text-center"
              // style={{ color: "#BA68C8" }}
            >
              {/* <Typewriter
                options={{
                  strings: ["Nafiz Iqbal", "Front End Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              <h1 className="lg:text-7xl md:text-5xl text-5xl md:text-start lg:text-start text-center font-extrabold leading-[64px] tracking-wider uppercase">
                Nafiz Iqbal
              </h1>
              <h3 className="text-4xl my-8">
                Front End Web <span className="text-primary">&lt;</span>
                Developer <span className="text-primary">/&gt;</span>
              </h3>
              <h4>Bound to deliver the product or service that you need</h4>
            </div>
          </div>
          <div className="animate-pulse">
            <img className="max-w-xl" src={bannerImg} alt="" />
          </div>
        </div>
        <div className="social_section pt-24">
          <p className="font-thin text-xl mb-12 text-accent">Explore More</p>
          <a target={"_blank"} href="https://github.com/naffiziqbal">
            <i className="social_icons fa-brands fa-github"></i>
          </a>

          <a target={"_blank"} href="https://linkedin.com/in/naffiziqbal">
            {" "}
            <i className="social_icons fa-brands fa-linkedin-in"></i>
          </a>

          <a href="https://twitter.com/NaffizIqbal" target={"_blank"}>
            <i className="social_icons fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banners;
