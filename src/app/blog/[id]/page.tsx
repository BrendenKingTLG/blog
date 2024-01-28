"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogContainer";
import BottomList from "@/components/BottomList";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type BlogPost = {
  id: string | number; // Add an identifier
  title: string;
  content: string;
  author: string;
  post_date: string;
};

type FirstBlogPostProps = {
  postId: string | number;
};

const FirstBlogPost = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const postId = usePathname().split("/").pop();

  useEffect(() => {
    fetch(`/api/blog-post?id=${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <p className="text-center py-80">Loading...</p>;
  if (error) return <p>Error loading post: {error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between bg-white">
        <BlogPost post={post} />
      </main>
      <BottomList />
      <Footer />
    </div>
  );
};

export default FirstBlogPost;
