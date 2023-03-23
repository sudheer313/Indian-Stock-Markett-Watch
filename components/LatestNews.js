import React from "react";
import NewsCard from "./NewsCard";

const latestNews = [
  {
    id: 1,
    title: "Indian Stock Market Hits All-Time High",
    date: "March 24, 2023",
    summary:
      "The Indian stock market reached an all-time high today, driven by strong gains in the technology and finance sectors...",
  },
  {
    id: 2,
    title: "RBI Announces New Monetary Policy Measures",
    date: "March 23, 2023",
    summary:
      "The Reserve Bank of India (RBI) announced a series of monetary policy measures aimed at boosting economic growth and controlling inflation...",
  },
  {
    id: 3,
    title: "Automobile Sector Shows Signs of Recovery",
    date: "March 22, 2023",
    summary:
      "The automobile sector is showing signs of recovery after a prolonged slowdown, with sales numbers gradually picking up across the industry...",
  },
];

const LatestNews = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              date={news.date}
              summary={news.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
