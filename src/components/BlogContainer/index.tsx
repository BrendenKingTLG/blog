"use client";
import "./style.css";

type BlogPost = {
  id: string | number; // Add an identifier
  title: string;
  content: string;
  author: string;
  post_date: string;
};

export default function BlogPost({ post }: { post: BlogPost }) {
  return (
    <div className="blog-post">
      <div className="divider"></div>
      <h1>{post.title}</h1>
      <p className="author">Author: {post.author}</p>
      <p className="date">Date: {post.post_date.slice(0, 10)}</p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
