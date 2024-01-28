"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomList from "@/components/BottomList";
import ContactForm from "@/components/ContactForm";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  type BlogPost = {
    id: string | number; // Add an identifier
    title: string;
    content: string;
    author: string;
    post_date: string;
  };

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

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between bg-white">
        <HomeHero />
        <ContactForm />
      </main>
      <BottomList posts={blogPosts} />
      <Footer />
    </div>
  );
}
