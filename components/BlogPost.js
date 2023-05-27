import React, { useEffect, useState } from "react";
import Head from "next/head";

const BlogPost = ({ title, date, summary, content }) => {
  return (
    <>
      <Head>
        <title>{title} | Bharat Bull Bear</title>
        {/* Add meta tags for SEO */}
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p>{summary}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
};

export default BlogPost;
