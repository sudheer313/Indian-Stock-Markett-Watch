import React from "react";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import AdComponent from "../components/AdComponent";

const blogPosts = [
  {
    "title": "The Future of Work in India: A Look at the Top 5 Skills in Demand",
    "date": "June 8, 2023",
    "summary": "The Indian workforce is changing rapidly, with new skills in demand and old ones becoming obsolete. In this blog post, we take a look at the top 5 skills that will be in demand in the Indian workforce of the future.",
    "slug": "the-future-of-work-in-india-a-look-at-the-top-5-skills-in-demand",
    "link": "/blog/the-future-of-work-in-india-a-look-at-the-top-5-skills-in-demand"
    },
    {
    "title": "How to Invest in Real Estate in India: A Beginner's Guide",
    "date": "June 8, 2023",
    "summary": "Real estate is a popular investment option in India, but it can be daunting for beginners. In this blog post, we provide a beginner's guide to investing in real estate in India. We cover everything from finding the right property to financing your investment.",
    "slug": "how-to-invest-in-real-estate-in-india-a-beginners-guide",
    "link": "/blog/how-to-invest-in-real-estate-in-india-a-beginners-guide"
    },
    {
    "title": "The Rise of the Indian Middle Class: What it Means for the Economy",
    "date": "June 8, 2023",
    "summary": "The Indian middle class is growing rapidly, and this is having a major impact on the Indian economy. In this blog post, we take a look at the rise of the Indian middle class and what it means for the economy.",
    "slug": "the-rise-of-the-indian-middle-class-what-it-means-for-the-economy",
    "link": "/blog/the-rise-of-the-indian-middle-class-what-it-means-for-the-economy"
    },
    {
    "title": "The Indian Startup Ecosystem: A Look at the Top 5 Startups to Watch",
    "date": "June 8, 2023",
    "summary": "The Indian startup ecosystem is booming, with new startups being founded every day. In this blog post, we take a look at the top 5 Indian startups to watch.",
    "slug": "the-indian-startup-ecosystem-a-look-at-the-top-5-startups-to-watch",
    "link": "/blog/the-indian-startup-ecosystem-a-look-at-the-top-5-startups-to-watch"
    },
    {
    "title": "How to Start a Business in India: A Step-by-Step Guide",
    "date": "June 8, 2023",
    "summary": "Starting a business in India can be a daunting task, but it is definitely possible. In this blog post, we provide a step-by-step guide to starting a business in India. We cover everything from registering your business to getting funding.",
    "slug": "how-to-start-a-business-in-india-a-step-by-step-guide",
    "link": "/blog/how-to-start-a-business-in-india-a-step-by-step-guide"
    },
    {
      "title": "How to Prepare for a Job Interview in India: A Step-by-Step Guide",
      "date": "June 8, 2023",
      "summary": "Preparing for a job interview can be daunting, but it is definitely possible. In this blog post, we provide a step-by-step guide to preparing for a job interview in India. We cover everything from researching the company to practicing your answers to common interview questions.",
      "slug": "how-to-prepare-for-a-job-interview-in-india-a-step-by-step-guide",
      "link": "/blog/how-to-prepare-for-a-job-interview-in-india-a-step-by-step-guide"
      },
      {
      "title": "The Best Places to Live in India for Expats",
      "date": "June 8, 2023",
      "summary": "India is a vast and diverse country, with something to offer everyone. If you are considering moving to India, you may be wondering where to live. In this blog post, we take a look at the best places to live in India for expats.",
      "slug": "the-best-places-to-live-in-india-for-expats",
      "link": "/blog/the-best-places-to-live-in-india-for-expats"
      },
      {
      "title": "The Indian Education System: A Guide for Parents",
      "date": "June 8, 2023",
      "summary": "The Indian education system is a complex one, and it can be difficult to understand for parents who are not familiar with it. In this blog post, we provide a guide to the Indian education system for parents. We cover everything from the different types of schools to the admissions process.",
      "slug": "the-indian-education-system-a-guide-for-parents",
      "link": "/blog/the-indian-education-system-a-guide-for-parents"
      },
      {
      "title": "The Indian Healthcare System: A Guide for Patients",
      "date": "June 8, 2023",
      "summary": "The Indian healthcare system is a vast and complex one, and it can be difficult to navigate for patients who are not familiar with it. In this blog post, we provide a guide to the Indian healthcare system for patients. We cover everything from finding a doctor to getting a prescription.",
      "slug": "the-indian-healthcare-system-a-guide-for-patients",
      "link": "/blog/the-indian-healthcare-system-a-guide-for-patients"
      },
      {
      "title": "The Indian Travel Guide: A Must-Read for Visitors",
      "date": "June 8, 2023",
      "summary": "India is a vast and diverse country, with something to offer everyone. If you are planning a trip to India, you may be wondering where to go and what to do. In this blog post, we provide a travel guide to India for visitors. We cover everything from the best places to visit to the dos and don'ts of Indian travel.",
      "slug": "the-indian-travel-guide-a-must-read-for-visitors",
      "link": "/blog/the-indian-travel-guide-a-must-read-for-visitors"
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
