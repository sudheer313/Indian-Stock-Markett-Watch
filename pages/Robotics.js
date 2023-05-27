import React from "react";
import Head from "next/head";
import AlgoTrading from "../components/AlgoTrading"; // Import the AlgoTrading component

const Robotics = () => {
  return (
    <>
      <Head>
        <title>Algorithmic Trading | Bharat Bull Bear</title>
        <meta
          name="description"
          content="Discover the world of algorithmic trading and its impact on the stock market. Learn about automated trading strategies, machine learning algorithms, and quantitative analysis techniques. Stay updated with the latest advancements in algo trading and its applications in the investment industry."
        />
      </Head>

      <div>
        <h1>Algorithmic Trading Page</h1>
        <AlgoTrading /> {/* Render the AlgoTrading component */}
      </div>
    </>
  );
};

export default Robotics;
