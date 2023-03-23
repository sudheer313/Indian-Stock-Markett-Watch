import Link from "next/link";
import React from "react";
import Header from "../components/Header";

const blogPosts = [
  {
    title: "Investing in the Indian Stock Market: A Beginner's Guide",
    date: "March 22, 2023",
    summary:
      "Learn the basics of investing in the Indian stock market and discover tips and strategies for successful investments.",
    slug: "investing-in-the-indian-stock-market-a-beginners-guide",
  },

  {
    title: "The Future of Technology Stocks in India",
    date: "March 18, 2023",
    summary:
      "Explore the growth potential of technology stocks in India and understand the factors driving their performance.",
  },
  {
    title: "How to Diversify Your Investment Portfolio",
    date: "March 15, 2023",
    summary:
      "Discover the benefits of diversification and learn how to create a diversified investment portfolio to minimize risk and maximize returns.",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>

      <div className="space-y-6">
        {blogPosts.map((blogPost, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <h3 className="text-xl font-semibold mb-2">
              <button className="text-blue-500 hover:text-blue-700">
                {blogPost.title}
              </button>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{blogPost.date}</p>
            <p className="text-gray-700">{blogPost.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
