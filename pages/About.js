import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Head>
        <title>Indian Stock Market Watch</title>
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
          The Indian stock market is one of the largest and most dynamic in the
          world. It has a rich history dating back to the 18th century, and it
          has played a major role in the economic development of India. The
          market is home to a wide variety of companies, from large
          multinationals to small startups. It is also a popular destination for
          foreign investors.
        </p>

        <p className="mb-4">
          Indian Stock Market Watch provides a comprehensive suite of tools and
          resources for investors. Our platform includes real-time data on
          market indices, stock quotes, and financial news. We also offer
          in-depth analysis of individual stocks, sectors, and overall market
          conditions. Our team of experienced financial analysts and market
          experts is dedicated to providing our users with the information they
          need to make informed investment decisions.
        </p>

        <p className="mb-4">
          We are committed to providing exceptional service and support to our
          users. If you have any questions or feedback, please feel free to
          contact us. We are always here to help and ensure that your experience
          with Indian Stock Market Watch is nothing short of excellent.
        </p>

        <p className="mb-4">
          We are also proud to offer a free trial of our platform. This gives
          you the opportunity to try out our services and see for yourself how
          we can help you achieve your investment goals.
        </p>
      </div>
    </>
  );
};

export default About;
