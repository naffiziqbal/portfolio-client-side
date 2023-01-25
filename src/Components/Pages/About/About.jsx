import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  const name = "Nafiz Iqbal";
  return (
    <div className=" container mx-auto p-5">
      <div>
        <h1 className="text-8xl font-bold opacity-10  text-center">ABOUT</h1>
        <hr className="mt-5 border-gray-700" />
      </div>
      <div className="flex justify-center items-center mt-12 flex-col">
        <img
          className="max-w-sm rounded-full border border-gray-700 mb-16"
          src="https://i.ibb.co/VY04WV4/317619319-154499960626976-8441470737664641621-n.jpg"
          alt=""
        />

        <div className="text-2xl text-accent max-w-xl space-x-2 tracking-widest font-mono h-52">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hello, I'm ${name}. A Bangladeshi Based Front-End Web Developer. I Develope Websites Using MERN  technology. My Dream is To make the virtual world more smoother.`
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
      </div>
      {/* <hr /> */}

    </div>
  );
};

export default About;
