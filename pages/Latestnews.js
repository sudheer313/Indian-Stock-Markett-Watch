import React from "react";
import Header from "../components/Header";
import AdComponent from "../components/AdComponent";

const newsData = [
  {
    id: 1,
    title: "Cryptocurrency Market Faces Major Correction",
    date: "May 25, 2023",
    summary:
      "The global cryptocurrency market took a steep dive today, facing a major correction. The top cryptocurrencies, including Bitcoin and Ethereum, faced significant losses. Market analysts are closely monitoring the situation.",
  },
  {
    id: 2,
    title: "EU to Implement New Digital Tax on Tech Giants",
    date: "May 24, 2023",
    summary:
      "The European Union has announced plans to implement a new digital tax on tech giants. The move is seen as an effort to increase tax revenues from multinational companies operating within the digital space.",
  },
  {
    id: 3,
    title: "Oil Prices Soar Amid Increased Global Demand",
    date: "May 23, 2023",
    summary:
      "Oil prices are on the rise again amid increasing global demand and supply constraints. The Brent Crude price has crossed the $80 per barrel mark for the first time in three years.",
  },
  {
    id: 4,
    title: "Tesla Announces New Affordable Model",
    date: "May 22, 2023",
    summary:
      "Tesla has announced a new, more affordable model in their line-up. The new vehicle is expected to make electric cars more accessible to a larger consumer base.",
  },
];

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
