import React from "react";
import Header from "../components/Header";

const newsData = [
  {
    id: 1,
    title: 'Indian Stock Market Hits All-Time High',
    date: 'March 24, 2023',
    summary: 'The Indian stock market reached an all-time high today, driven by strong gains in the technology and finance sectors...',
  },
  {
    id: 2,
    title: 'RBI Announces New Monetary Policy Measures',
    date: 'March 23, 2023',
    summary: 'The Reserve Bank of India (RBI) announced a series of monetary policy measures aimed at boosting economic growth and controlling inflation...',
  },
  {
    id: 3,
    title: 'Automobile Sector Shows Signs of Recovery',
    date: 'March 22, 2023',
    summary: 'The automobile sector is showing signs of recovery after a prolonged slowdown, with sales numbers gradually picking up across the industry...',
  },
];
const Latestnews = () => {
  return  <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">Latest News</h1>

  {newsData.map((newsItem) => (
    <div key={newsItem.id} className="bg-white shadow-md rounded-md p-4 mb-6">
      <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
      <p>{newsItem.summary}</p>
    </div>
  ))}
</div>;
};

export default Latestnews;
