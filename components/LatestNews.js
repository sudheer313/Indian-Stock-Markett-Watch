import React from "react";
import NewsCard from "./NewsCard";

const latestNews = [
  {
    id: 1,
    title: "Yellen Faces Fallout After Debt Limit Warnings Ignored",
    date: "May 27, 2023",
    summary:
      "U.S. Secretary of the Treasury, Yellen's cautions regarding the debt limit were not taken into consideration, now leaving her to tackle the resulting consequences. She has kept her contingency plans private but indicated she has preparations in place to deal with potential adverse outcomes.",
  },
  {
    id: 2,
    title: "Aurobindo Pharma's Q4 Net Profit Drops by 12%, Revenue Rises 11%",
    date: "May 27, 2023",
    summary:
      "Aurobindo Pharma's net profit in Q4 has seen a 12% slump, standing at Rs 506 crore, whereas revenue saw a 11% increase. Q4FY23 EBITDA rose 3% from Rs 974.4 crore in the previous year, amounting to Rs 1,002 crore.",
  },
  {
    id: 3,
    title:
      "Union Ministers Laud PM Modi's 'Decisive Leadership' Marking 9 Years in Government",
    date: "May 27, 2023",
    summary:
      "At the national conclave marking 9 years of Modi government, union ministers commended PM's resolute leadership. Finance Minister Nirmala Sitharaman highlighted PM Modi's transformative mindset and his 'Seva Bhaav', earning him the trust of the Indian populace.",
  },
  {
    id: 4,
    title: "Power Finance Corp's Net Profit Increases by 44% in March Quarter",
    date: "May 27, 2023",
    summary:
      "Power Finance Corp reported a 44% rise in its net profit for the March quarter, amounting to Rs 6,128 crore. The company's consolidated net profit was Rs 4,295.90 crore in the same quarter of the previous year, as per a BSE filing.",
  },
  {
    id: 5,
    title: "Indian IT Firms Brace for Post-Covid Demand Surge",
    date: "May 29, 2023",
    summary:
      "As global economies begin to rebound from the Covid-19 pandemic, demand for IT services is expected to surge. Indian IT firms are ramping up their capabilities to meet this increased demand.",
  },
  {
    id: 6,
    title: "Indian Government Pushes for More Domestic Manufacturing",
    date: "May 29, 2023",
    summary:
      "In a move to bolster the domestic manufacturing sector, the Indian government has announced new incentives for local production of key industrial components.",
  },
  {
    id: 7,
    title: "Reliance Jio Announces New Investments in 5G Technology",
    date: "May 29, 2023",
    summary:
      "Reliance Jio has announced significant new investments in 5G technology, with plans to roll out new services to consumers later this year.",
  },
  {
    id: 8,
    title: "Infosys Announces Major Acquisition in Cloud Services Sector",
    date: "May 31, 2023",
    summary:
      "Infosys has announced its acquisition of a major player in the cloud services sector, marking its significant expansion into this growing field. The move is expected to help Infosys provide more comprehensive solutions to its customers.",
  },
  {
    id: 9,
    title: "Reserve Bank of India Keeps Interest Rates Steady",
    date: "May 31, 2023",
    summary:
      "The Reserve Bank of India (RBI) has decided to keep its key lending rate, the repo rate, unchanged at 4 percent. This is in line with market expectations, as the central bank continues its accommodative stance to support the economy.",
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
