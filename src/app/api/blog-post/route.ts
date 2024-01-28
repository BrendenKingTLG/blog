import db from "@/db"; // Adjust the import path based on your db.js location
import { NextRequest, NextResponse } from 'next/server';

// Function to handle GET requests
export async function GET(request: NextRequest) {
  try {
    // Extract the ID from the URL, if present
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    let response;

    if (id) {
      // If an ID is provided, fetch the specific post
      const post = await db
        .selectFrom("blog_posts")
        .select(["id", "title", "content", "author", "post_date"])
        .where("id", "=", parseInt(id))
        .execute();

      response = post.length > 0 ? post[0] : { message: "Post not found" };
    } else {
      // If no ID, fetch all posts
      const posts = await db
        .selectFrom("blog_posts")
        .select(["id", "title", "content", "author", "post_date"])
        .orderBy("id", "asc")
        .execute();

      response = posts;
    }

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
