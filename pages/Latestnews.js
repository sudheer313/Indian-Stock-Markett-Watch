import React from "react";
import Header from "../components/Header";



const Latestnews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      {newsData.map((newsItem) => (
        <div
          key={newsItem.id}
          className="bg-white shadow-md rounded-md p-4 mb-6"
        >
          <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
          <p>{newsItem.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Latestnews;
