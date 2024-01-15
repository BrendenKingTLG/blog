import db from "@/db"; // Adjust the import path based on your db.js location
import { NextRequest, NextResponse } from 'next/server';

// Function to handle GET requests
export async function GET(request: NextRequest) {
  try {
    const posts = await db
      .selectFrom("blog_posts")
      .select(["title", "content", "author", "post_date"])
      .orderBy("id", "asc")
      .limit(1)
      .execute();

    // Correct way to return a JSON response
    return new NextResponse(JSON.stringify(posts[0]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);

    // Correct way to return an error response
    return new NextResponse(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
