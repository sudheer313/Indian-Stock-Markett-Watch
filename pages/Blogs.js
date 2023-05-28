import React from "react";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import AdComponent from "../components/AdComponent";

const blogPosts = [
  {
    title: "Investing in the Indian Stock Market: A Beginner's Guide",
    date: "March 22, 2023",
    summary:
      "Learn the basics of investing in the Indian stock market and discover tips and strategies for successful investments.",
    slug: "investing-in-the-indian-stock-market-a-beginners-guide",
    link: "/blog/investing-in-the-indian-stock-market-a-beginners-guide",
  },
  {
    title: "The Future of Technology Stocks in India",
    date: "March 18, 2023",
    summary:
      "Explore the growth potential of technology stocks in India and understand the factors driving their performance.",
    slug: "the-future-of-technology-stocks-in-india",
    link: "/blog/the-future-of-technology-stocks-in-india",
  },
  {
    title: "How to Diversify Your Investment Portfolio",
    date: "March 15, 2023",
    summary:
      "Discover the benefits of diversification and learn how to create a diversified investment portfolio to minimize risk and maximize returns.",
    slug: "how-to-diversify-your-investment-portfolio",
    link: "/blog/how-to-diversify-your-investment-portfolio",
  },
];

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Indian Stock Market Watch</title>
        <meta
          name="description"
          content="Explore our latest blog posts on investing in the Indian stock market. Learn tips and strategies for successful investments, understand the future of technology stocks in India, and discover how to diversify your investment portfolio."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>

        <div className="space-y-6">
          {blogPosts.map((blogPost) => (
            <BlogPost
              key={blogPost.slug}
              title={blogPost.title}
              date={blogPost.date}
              summary={blogPost.summary}
              link={blogPost.link}
            />
          ))}
        </div>

        {/* Add the AdComponent */}
        <div className="mt-8">
          <AdComponent />
        </div>
      </div>
    </>
  );
};

export default Blogs;
