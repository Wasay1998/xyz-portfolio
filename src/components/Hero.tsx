import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover bg-transparent"
      style={{
        backgroundImage: "url(/profile.jpg)", // Set the background image URL
        backgroundSize: "cover", // Ensure the background image covers the container
        backgroundPosition: "center", // Center the image in the container
      }}
    >
      <Navbar />

      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] relative">
        <div className="hidden lg:block"></div>

        <div className="flex justify-center items-center text-center text-white z-10">
          <div>
            <p
              className="text-[80px] sm:text-[100px] font-extrabold leading-tight"
              data-aos="fade-up"
              style={{
                background: "linear-gradient(45deg, #ff0099, #493240)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow:
                  "0 0 10px rgba(255, 0, 153, 0.8), 0 0 20px rgba(255, 0, 153, 0.8)",
              }}
            >
              I&apos;m
            </p>
            <p
              className="text-[80px] sm:text-[100px] font-extrabold leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                background: "linear-gradient(45deg, #ff0099, #493240)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow:
                  "0 0 10px rgba(255, 0, 153, 0.8), 0 0 20px rgba(255, 0, 153, 0.8)",
              }}
            >
              Laraib
            </p>
            <p
              className="text-[80px] sm:text-[100px] font-extrabold leading-tight"
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                background: "linear-gradient(45deg, #ff0099, #493240)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow:
                  "0 0 10px rgba(255, 0, 153, 0.8), 0 0 20px rgba(255, 0, 153, 0.8)",
              }}
            >
              Rizwan
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
