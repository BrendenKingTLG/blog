"use client";
import React, { useState } from "react";
import Link from "next/link";

import "./style.css";
type BlogPost = {
  id: string | number;
  title: string;
  content: string;
  author: string;
  post_date: string;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const performSearch = async () => {
    try {
      const results = await performActualSearch(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const performActualSearch = async (query: string) => {
    const response = await fetch(
      `/api/blog-post?title=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as BlogPost[];
  };

  const truncateContent = (content: string, maxLength: number) => {
    // Remove HTML tags for length calculation
    const strippedContent = content.replace(/<[^>]*>?/gm, "");

    // Truncate and add ellipsis if content is longer than maxLength
    return strippedContent.length > maxLength
      ? strippedContent.substring(0, maxLength) + "..."
      : strippedContent;
  };
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center bg-white py-4">
        <div className="flex items-center justify-center bg-white rounded-2xl w-80 h-10 border-2">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-full max-w-xs border-0 focus:outline-none"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className="btn btn-ghost btn-circle" onClick={performSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-left p-4">
          <p>Results for: {searchQuery}</p>
          <div className="px-1"></div>
          {searchResults.length === 0 ? (
            <p></p>
          ) : (
            <div className="flex flex-wrap">
              {Array.isArray(searchResults) &&
                searchResults.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="card w-96 bg-base-100 shadow-xl m-4"
                  >
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
          )}
        </div>
      </main>
    </div>
  );
}
