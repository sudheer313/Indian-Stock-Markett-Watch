import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import LatestNews from "../components/LatestNews";
import Blogs from "./Blogs";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Indian Stock Market Watch</title>
        <meta
          name="description"
          content="Welcome to the Indian Stock Market Watch, your one-stop source for the latest news, insights, and updates on the Indian stock market. We provide accurate and timely information to help you make informed investment decisions."
        />
      </Head>
      <Hero />
      <Section>
        <h1 className="text-3xl font-bold mb-6">Indian Stock Market Watch</h1>
        <p className="mb-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Welcome to the Indian Stock Market Watch, your one-stop source for the
          latest news, insights, and updates on the Indian stock market. Our
          goal is to provide you with accurate and timely information to help
          you make informed investment decisions.
        </p>
        <p className="mb-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The Indian stock market has grown exponentially over the past few
          decades, attracting investors from all around the world. With a
          diverse range of sectors, including technology, finance, healthcare,
          and infrastructure, the Indian market offers a wealth of opportunities
          for investors to explore.
        </p>
        <p className="mb-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Our platform provides comprehensive coverage of the National Stock
          Exchange (NSE) and the Bombay Stock Exchange (BSE), along with
          real-time data on market indices like the NIFTY 50 and SENSEX. In
          addition, we provide in-depth analysis and expert opinions on
          individual stocks, sectors, and the overall market.
        </p>
        <p className="mb-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Stay ahead in the world of investing by keeping yourself updated with
          our latest news, expert opinions, and insightful articles on the
          Indian stock market. Whether you're a beginner or an experienced
          investor, our platform offers valuable resources to help you make
          well-informed decisions and achieve your financial goals.
        </p>
      </Section>
      <Section backgroundColor="gray-100">
        <LatestNews />
      </Section>
      <Section>
        <Blogs />
      </Section>
    </>
  );
};

export default Home;
