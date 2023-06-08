import React from "react";
import NewsCard from "./NewsCard";

const latestNews = [
  {
    id: 1,
    title:
      "Sensex, Nifty close higher; Reliance Industries, HDFC Bank top gainers",
    date: "June 8, 2023",
    summary:
      "The Sensex and Nifty closed higher on Thursday, led by gains in Reliance Industries and HDFC Bank. The Sensex closed 279.3 points higher at 54,252.32, while the Nifty closed 82.20 points higher at 16,221.25.",
  },
  {
    id: 2,
    title: "Rupee closes at 78.06 against US dollar",
    date: "June 8, 2023",
    summary:
      "The rupee closed at 78.06 against the US dollar on Thursday, recovering from its record low of 78.28 touched in the previous session. The rupee was supported by gains in domestic equities and positive global cues.",
  },
  {
    id: 3,
    title: "Gold prices fall Rs 1,000 to Rs 52,000 per 10 gram",
    date: "June 8, 2023",
    summary:
      "Gold prices fell Rs 1,000 to Rs 52,000 per 10 gram in the national capital on Thursday, in line with a weak trend overseas. Silver also declined by Rs 1,500 to Rs 64,400 per kg.",
  },
  {
    id: 4,
    title: "Crude oil prices rise above $115 per barrel",
    date: "June 8, 2023",
    summary:
      "Crude oil prices rose above $115 per barrel on Thursday, supported by concerns over tight global supplies. Brent crude futures were up 63 cents, or 0.5%, at $115.15 a barrel by 0230 GMT, while US West Texas Intermediate crude futures were up 62 cents, or 0.5%, at $113.99 a barrel.",
  },
  {
    id: 5,
    title: "Shares of LIC to list on June 10",
    date: "June 8, 2023",
    summary:
      "Shares of Life Insurance Corporation of India (LIC) will list on the stock exchanges on June 10. The government is planning to sell a 3.5% stake in LIC through an initial public offering (IPO). The IPO is expected to raise around Rs 21,000 crore.",
  },
  {
    id: 6,
    title: "The RBI has kept the repo rate unchanged at 4.4%",
    date: "June 8, 2023",
    summary:
      "The RBI has kept the repo rate unchanged at 4.4%. The RBI monetary policy committee (MPC) has decided to keep the repo rate unchanged at 4.4% in its June 2023 policy review. The MPC has also kept the reverse repo rate unchanged at 3.35%. The MPC has said that it will continue to monitor the evolving inflation and growth dynamics and take appropriate action as needed.",
  },
  {
    id: 7,
    title:
      "The Indian government has announced a Rs 1.95 lakh crore package to boost the economy",
    date: "June 8, 2023",
    summary:
      "The government has announced a Rs 1.95 lakh crore package to boost the economy. The package includes measures such as tax cuts, spending on infrastructure, and support for the MSME sector. The government has said that the package will help to create jobs and boost growth.",
  },
  {
    id: 8,
    title: "The Sensex and Nifty have hit new record highs",
    date: "June 8, 2023",
    summary:
      "The Sensex and Nifty have hit new record highs on the back of strong corporate earnings and positive global cues. The Sensex closed at 54,324.94, while the Nifty closed at 16,243.45",
  },
  {
    id: 9,
    title: "The rupee has appreciated against the US dollar",
    date: "June 8, 2023",
    summary:
      "The rupee has appreciated against the US dollar to its highest level in over a month. The rupee closed at 77.73 against the US dollar. The appreciation of the rupee is due to a number of factors, including strong foreign inflows and a weak US dollar.",
  },
  {
    id: 10,
    title: "Gold prices have fallen",
    date: "June 8, 2023",
    summary:
      "Gold prices have fallen to their lowest level in over a month. Gold prices closed at Rs 51,700 per 10 gram. The fall in gold prices is due to a number of factors, including a stronger US dollar and rising interest rates",
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
