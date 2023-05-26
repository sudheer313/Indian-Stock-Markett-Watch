import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Indian Stock Market Watch</title>
        <meta
          name="description"
          content="Indian Stock Market Watch is a platform dedicated to providing the latest news, insights, and updates on the Indian stock market. Learn more about our mission, our team, and our commitment to empowering investors."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <p className="mb-4">
          Indian Stock Market Watch is a platform dedicated to providing the
          latest news, insights, and updates on the Indian stock market. Our
          mission is to empower investors with accurate and timely information
          to help them make informed investment decisions.
        </p>

        <p className="mb-4">
          Our team of experienced financial analysts and market experts work
          diligently to analyze market trends and provide in-depth analysis of
          individual stocks, sectors, and overall market conditions. We strive
          to deliver unbiased and reliable information to our users, ensuring
          that they have the knowledge and resources needed to succeed in the
          world of investing.
        </p>

        <p className="mb-4">
          At Indian Stock Market Watch, we understand the importance of staying
          up-to-date with market developments and investment opportunities. Our
          platform offers a wide range of tools and resources, including
          real-time data on market indices, stock quotes, and financial news. We
          also provide educational content and expert opinions to help investors
          make well-informed decisions and achieve their financial goals.
        </p>

        <p className="mb-4">
          We are committed to providing exceptional service and support to our
          users. If you have any questions or feedback, please feel free to
          contact us. We are always here to help and ensure that your experience
          with Indian Stock Market Watch is nothing short of excellent.
        </p>
      </div>
    </>
  );
};

export default About;
