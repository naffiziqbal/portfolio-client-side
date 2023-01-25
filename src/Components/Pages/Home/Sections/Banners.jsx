import bg from "../../../../assest/cool-background.png";
import React from "react";
import Typewriter from "typewriter-effect";
import bannerImg from "../../../../assest/bannerImg.svg";
import "./Banner.css";

const Banners = () => {
  return (
    <div
      className="p-5 sm:text-center bg-slate-800"
      style={{ background: `url(${bg})`, opacity: "0.7" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
          <div>
            <div
              className="text-4xl font-bold max-w-md relative"
              style={{ color: "#BA68C8" }}
            >
              <Typewriter
                options={{
                  strings: ["Nafiz Iqbal", "Front End Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="">
            <img className="max-w-xl" src={bannerImg} alt="" />
          </div>
        </div>
        <div className="social_section pt-24">
          <p className="font-thin text-xl mb-12">Explore More</p>
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
