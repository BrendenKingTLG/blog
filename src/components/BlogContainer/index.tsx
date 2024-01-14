import React, { useState, useEffect } from "react";
import "./style.css";

// type Post = {
//   title: string;
//   content: string;
//   author: string;
//   post_date: string;
// };

// const FirstBlogPost = () => {
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchFirstPost = async () => {
//       try {
//         const response = await fetch("/api/blogpost/first");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPost(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFirstPost();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       {post ? (
//         <article>
//           <h1>{post.title}</h1>
//           <p>{post.content}</p>
//           <small>Author: {post.author}</small>
//           <br />
//           <small>Date: {post.post_date}</small>
//         </article>
//       ) : (
//         <p>Post not found.</p>
//       )}
//     </div>
//   );
// };

export default function Blog() {
  return (
    <div className="grid-container">
      <div className="grid-item">Column 1</div>
      <div className="grid-item grid-item-large">
        <div className="blog-post"></div>
      </div>
      <div className="grid-item">Column 3</div>
    </div>
  );
}
