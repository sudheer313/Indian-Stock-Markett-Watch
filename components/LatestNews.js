import React from "react";
import NewsCard from "./NewsCard";

const latestNews = [
  {
    id: 1,
    title: "New Breakthrough in Quantum Computing",
    date: "June 5, 2023",
    summary:
      "Scientists have announced a new breakthrough in quantum computing that could revolutionize the field. This new development has the potential to significantly speed up processing times and improve data security.",
  },
  {
    id: 2,
    title: "SpaceX Launches New Satellite",
    date: "June 5, 2023",
    summary:
      "SpaceX has successfully launched a new satellite into orbit. The launch went as planned and the satellite is now operational, providing communication services to remote areas.",
  },
  {
    id: 3,
    title: "Apple Announces New iPhone",
    date: "June 5, 2023",
    summary:
      "Apple has unveiled its latest iPhone model, which features a faster processor, improved camera capabilities, and a larger display. The new model is expected to be available for pre-order next week.",
  },
  {
    id: 4,
    title: "Bitcoin Value Hits New High",
    date: "June 6, 2023",
    summary:
      "The value of Bitcoin has reached a new all-time high, continuing its upward trend. Investors attribute this increase to widespread adoption and growing acceptance of cryptocurrencies.",
  },
  {
    id: 5,
    title: "Amazon Opens New Headquarters",
    date: "June 6, 2023",
    summary:
      "Amazon has officially opened its new headquarters in Arlington, Virginia. The tech giant expects the new headquarters to create thousands of jobs in the area.",
  },
  {
    id: 6,
    title: "Google Faces Antitrust Investigation",
    date: "June 6, 2023",
    summary:
      "Google is under investigation by European antitrust authorities who are looking into the company's advertising practices. Google has pledged to cooperate fully with the investigation.",
  },
  {
    id: 7,
    title: "Microsoft Acquires Gaming Company",
    date: "June 6, 2023",
    summary:
      "Microsoft has announced its acquisition of a major gaming company, aiming to strengthen its presence in the gaming industry. The terms of the deal, including the acquisition price, have not been disclosed.",
  },
  {
    id: 8,
    title: "Tesla Unveils New Electric Vehicle Model",
    date: "June 6, 2023",
    summary:
      "Tesla has unveiled a new model of its electric vehicle line. The new model features extended battery life and improved autonomous driving capabilities.",
  },
  {
    id: 9,
    title: "Facebook Changes Privacy Policy",
    date: "June 6, 2023",
    summary:
      "Facebook has announced changes to its privacy policy. The social media giant says these changes give users more control over their data.",
  },
  {
    id: 10,
    title: "IBM Invests in Cloud Technology",
    date: "June 6, 2023",
    summary:
      "IBM has announced a major investment in cloud technology, aiming to compete with other tech giants in the rapidly growing field. The company plans to launch several new cloud services within the next year.",
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
