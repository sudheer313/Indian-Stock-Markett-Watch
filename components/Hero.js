import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill"
        style={{ backgroundImage: 'url("/img1.jpg")' }}
      >
        <h1 className=" hover:text-blue-700 text-4xl font-bold mb-4">
          Welcome to the Indian Stock Market Watch
        </h1>
        <p className=" hover:text-blue-700 text-2xl mb-12">
          Stay up-to-date with the latest news, blogs, and market insights
        </p>
        <button className="text-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
