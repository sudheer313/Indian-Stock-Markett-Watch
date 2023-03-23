import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill"
        style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Indian Stock Market Watch
        </h1>
        <p className="text-2xl mb-12">
          Stay up-to-date with the latest news, blogs, and market insights
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
