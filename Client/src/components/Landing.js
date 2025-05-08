import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-white relative bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div
        className="text-yellow-500 text-[6vh] md:text-[12vh] font-bold animate__animated animate__bounceInDown hover:scale-125 hover:animate-bounce transition-all"
        style={{ textShadow: "2px 2px 4px #000000" }}
      >
        Second<span className="text-white">Hand</span>
      </div>
      <div className="text-center z-10 flex flex-col items-center">
        <h1
          className="text-3xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInDown text-white"
          style={{ WebkitTextStroke: "1px black" }}
        >
          College Marketplace
          <br />
          Connecting Students, Empowering Deals!
        </h1>
        <p className="w-2/3 text-lg text-gray-100 md:text-xl mb-8 animate__animated animate__fadeInUp px-4">
          Buy and sell items within your college community. Seniors can pass
          down their belongings to freshers, reducing costs and environmental
          impact.
        </p>
        <Link
          to="/register"
          className="w-64 mx-auto text-lg bg-yellow-500 hover:bg-gray-900 text-gray-900 hover:text-white font-semibold py-4 px-8 rounded-3xl flex items-center justify-center space-x-2 transition duration-300 animate__animated animate__pulse hover:animate-pulse"
        >
          Get Started
          <FaArrowRight className="text-xl ml-2" />
        </Link>
        <Link
          to="/home"
          className="my-4 text-white hover:text-yellow-500 text-xl font-semibold animate__animated animate__pulse transition-all"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
