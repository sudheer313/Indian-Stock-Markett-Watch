import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blogPostData, setBlogPostData] = useState(null);

  useEffect(() => {
    const fetchBlogPostData = async () => {
      try {
        const response = await fetch(
          `https://api.bharatbullbear.com/api/blog/${slug || ""}`
        );
        const data = await response.json();

        if (response.ok) {
          setBlogPostData(data); // Set the blog post data if the response is successful
        } else {
          throw new Error(data.message); // Handle error if the response is not successful
        }
      } catch (error) {
        console.error(error);
        // Handle error in fetching the blog post data
      }
    };

    if (slug) {
      fetchBlogPostData();
    }
  }, [slug]);

  if (!blogPostData) {
    // Handle loading state or error state
    return <div>Loading...</div>;
  }

  const { title, date, summary, content } = blogPostData;

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
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
};

export default BlogPost;
