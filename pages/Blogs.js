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
  {
    title: "Understanding Algorithmic Trading in the Indian Stock Market",
    date: "May 31, 2023",
    summary:
      "Dive into the world of algorithmic trading in India, its benefits, drawbacks, and its impact on investors and the stock market.",
    slug: "understanding-algorithmic-trading-in-india",
    link: "/blog/understanding-algorithmic-trading-in-india",
  },
  {
    title: "Cryptocurrencies in India: A Risky Venture or Lucrative Investment?",
    date: "May 31, 2023",
    summary:
      "Explore the complex landscape of cryptocurrency investing in India, its legal implications, risks and potential rewards.",
    slug: "cryptocurrencies-in-india-a-risky-venture-or-lucrative-investment",
    link: "/blog/cryptocurrencies-in-india-a-risky-venture-or-lucrative-investment",
  },
  {
    title: "Navigating the Real Estate Sector in India",
    date: "May 29, 2023",
    summary:
      "Gain insights into the burgeoning real estate sector in India, and learn how to navigate and make informed investment decisions.",
    slug: "navigating-the-real-estate-sector-in-india",
    link: "/blog/navigating-the-real-estate-sector-in-india",
  }
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
