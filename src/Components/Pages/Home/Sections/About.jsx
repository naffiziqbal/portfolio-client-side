import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assest/Code typing-amico.svg";

const About = () => {
  return (
    <>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto container items-center h-screen p-5">
        <div>
          <img className="max-w-lg" src={img} alt="" />
        </div>
        <div className="max-w-md">
          <div className="flex justify-between">
            <span className="text-3xl  underline mb-5 font-semibold text-[#BA68C8]">
              About Me
            </span>

            <span className="btn btn-xs">
              <Link to={"/about"}>Learn More</Link>
            </span>
          </div>

          <p>Enthusiast, Visionary,Ambitious</p>
          <p>
            Hi, I'm Nafiz Iqbal. A front-end Web Developer Located in
            Bangladesh. My dream is to make the virtual world more smooth and
            better like Butter.
          </p>
        </div>
      </div>
      <hr
        className=" container mx-auto border-[#ba68c8]"
        style={{
          height: 5,
        }}
      />
    </>
  );
};

export default About;
