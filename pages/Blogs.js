import React from "react";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import AdComponent from "../components/AdComponent";

const blogPosts = [
  {
    title: "Impact of AI on the Future of Stock Trading",
    date: "June 1, 2023",
    summary:
      "Discover how Artificial Intelligence is revolutionizing stock trading with predictive analytics, algorithmic trading, and personalized wealth management.",
    slug: "impact-of-ai-on-the-future-of-stock-trading",
    link: "/blog/impact-of-ai-on-the-future-of-stock-trading",
  },
  {
    title: "Investing in Green Energy: Opportunities and Challenges",
    date: "June 2, 2023",
    summary:
      "Uncover the potential of green energy investments in India and understand the opportunities and challenges in this rapidly growing sector.",
    slug: "investing-in-green-energy-opportunities-and-challenges",
    link: "/blog/investing-in-green-energy-opportunities-and-challenges",
  },
  {
    title: "ESG Investing: Aligning Profit with Purpose",
    date: "June 3, 2023",
    summary:
      "Learn about ESG investing, its growing prominence in India, and how you can align your investment decisions with your values.",
    slug: "esg-investing-aligning-profit-with-purpose",
    link: "/blog/esg-investing-aligning-profit-with-purpose",
  },
  {
    title: "Decoding the Rise of NFTs in the Indian Market",
    date: "June 4, 2023",
    summary:
      "Explore the emerging trend of NFTs, their impact on the digital economy in India, and the potential for investors.",
    slug: "decoding-the-rise-of-nfts-in-the-indian-market",
    link: "/blog/decoding-the-rise-of-nfts-in-the-indian-market",
  },
  {
    title: "The Role of FinTech in Democratizing Investments",
    date: "June 5, 2023",
    summary:
      "Understand how FinTech is democratizing investments by making them more accessible and inclusive to the masses.",
    slug: "the-role-of-fintech-in-democratizing-investments",
    link: "/blog/the-role-of-fintech-in-democratizing-investments",
  },
  {
    title: "Mastering Risk Management in Stock Trading",
    date: "June 6, 2023",
    summary:
      "Master the art of risk management in stock trading to protect your investments and maximize your returns.",
    slug: "mastering-risk-management-in-stock-trading",
    link: "/blog/mastering-risk-management-in-stock-trading",
  },
  {
    title: "Understanding the Impact of Geopolitics on the Stock Market",
    date: "June 6, 2023",
    summary:
      "Learn how geopolitical events can impact the stock market and what investors can do to navigate these uncertainties.",
    slug: "understanding-the-impact-of-geopolitics-on-the-stock-market",
    link: "/blog/understanding-the-impact-of-geopolitics-on-the-stock-market",
  },
  {
    title: "Deciphering Stock Market Trends Post-Covid-19",
    date: "June 6, 2023",
    summary:
      "Delve into the changing trends in the stock market in the aftermath of the Covid-19 pandemic and what it means for investors.",
    slug: "deciphering-stock-market-trends-post-covid-19",
    link: "/blog/deciphering-stock-market-trends-post-covid-19",
  },
  {
    title: "The Growth of HealthTech in India: An Investor's Guide",
    date: "June 6, 2023",
    summary:
      "Explore the rapidly growing HealthTech industry in India and understand its investment potential.",
    slug: "the-growth-of-healthtech-in-india-an-investors-guide",
    link: "/blog/the-growth-of-healthtech-in-india-an-investors-guide",
  },
  {
    title: "Investing in India's Digital Economy: A Comprehensive Guide",
    date: "June 6, 2023",
    summary:
      "Dive into India's booming digital economy, its key sectors, and the opportunities it presents for investors.",
    slug: "investing-in-indias-digital-economy-a-comprehensive-guide",
    link: "/blog/investing-in-indias-digital-economy-a-comprehensive-guide",
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
