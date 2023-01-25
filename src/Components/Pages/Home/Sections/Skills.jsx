import React from "react";
import "animate.css/animate.min.css";
import reactSvg from "../../../../assest/icons8-react-40.png";
import firebasSvg from "../../../../assest/icons8-firebase.svg";
import htmlSvg from "../../../../assest/icons8-html-5.svg";
import tailwindSvg from "../../../../assest/icons8-tailwindcss.svg";
import nodeSvg from "../../../../assest/icons8-nodejs.svg";
import jsSvg from "../../../../assest/icons8-javascript.svg";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <div className=" my-12 max-w-5xl container mx-auto">
      <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
        <p className="text-4xl font-semibold text-center text-primary mb-20">
          My Skills
        </p>
        <div className="flex justify-evenly">
          <span className="animate-pulse">
            <img src={reactSvg} className="text-blue-400" alt="" />
            <p>React Js</p>
          </span>
          <span className="animate-pulse">
            <img src={htmlSvg} alt="" />
            <p>HTML</p>
          </span>
          <span className="animate-pulse">
            <img src={tailwindSvg} alt="" />
            <p>Tailwind CSS</p>
          </span>
          <span className="animate-pulse">
            <img src={jsSvg} alt="" />
            <p>Javascript</p>
          </span>
          <span className="animate-pulse">
            <img src={nodeSvg} alt="" />
            <p>Node Js</p>
          </span>
          <span className="animate-pulse">
            <img src={firebasSvg} alt="" />
            <p>Firebase</p>
          </span>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Skills;
