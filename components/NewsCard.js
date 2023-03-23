import React from "react";

const NewsCard = ({ title, date, summary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default NewsCard;
