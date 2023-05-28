import React from "react";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import AdComponent from "../components/AdComponent";

const blogPosts = [
  // ...your blog post data
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
