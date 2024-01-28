"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";

type BlogPost = {
  id: string | number; // Add an identifier
  title: string;
  content: string; // Assuming this is a string containing HTML
  author: string;
  post_date: string;
};

export default function Index() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // Corrected this line
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blog-post")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log to check the structure of fetched data
        setBlogPosts(data); // Make sure data is an array
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts: {error}</p>;

  if (!blogPosts || blogPosts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  const truncateContent = (content: string, maxLength: number) => {
    // Remove HTML tags for length calculation
    const strippedContent = content.replace(/<[^>]*>?/gm, "");

    // Truncate and add ellipsis if content is longer than maxLength
    return strippedContent.length > maxLength
      ? strippedContent.substring(0, maxLength) + "..."
      : strippedContent;
  };

  return (
    <div className="py-5">
      <h4 className="px-3">Latest</h4>
      <div className="divider m-0"></div>
      <div className="grid-layout pt-4 pb-5">
        {blogPosts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="nyt-card">
              <div className="card-body">
                <h2 className="card-title">
                  {truncateContent(post.title, 20)}
                </h2>
                <p>{truncateContent(post.content, 80)}</p>{" "}
                <div className="card-actions">
                  <p>
                    {new Date(post.post_date).toLocaleDateString()} *{" "}
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
