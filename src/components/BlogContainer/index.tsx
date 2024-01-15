"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import BlogPreview from "../BlogPreview";
import BlogList from "../BlogList";
type BlogPost = {
  title: string;
  content: string;
  author: string;
  post_date: string;
};

const FirstBlogPost = () => {
  const [post, setPost] = useState<BlogPost>({} as BlogPost);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/blog-post")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPost(data))
      .catch((error) => {
        console.error("Fetching error:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post: {error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p className="author">Author: {post.author}</p>
      <p className="date">Date: {post.post_date.slice(0, 10)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default function Blog() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <BlogPreview
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogPreview
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogPreview
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogPreview
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />
        <BlogPreview
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />
      </div>
      <div className="grid-item grid-item-large">
        <div className="blog-post">
          <FirstBlogPost />
          <footer className="author-bio">
            <h3>About the Author</h3>
            <p>
              TechTrekker is a software engineer with a passion for emerging
              technologies. With a decade of experience in the tech industry,
              they write about the intersection of software development, AI, and
              the future of technology.
            </p>
          </footer>
        </div>
      </div>
      <div className="grid-item">
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <br />

        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
      </div>
    </div>
  );
}
