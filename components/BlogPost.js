import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const BlogPost = ({ title, date, summary, link }) => {
  return (
    <>
      <Head>
        <title>{title} | Bharat Bull Bear</title>
        {/* Add meta tags for SEO */}
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{summary}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Read More
        </a>
      </div>
    </>
  );
};

export default BlogPost;
