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
