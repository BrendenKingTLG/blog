import { createKysely } from "@vercel/postgres-kysely";

// Define your table structures here
interface BlogTable {
  id: number;
  title: string;
  content: string;
  author: string;
  post_date: string;
}

interface SubTable {
  email: string;
}
interface Database {
  blog_posts: BlogTable; // Add other tables as needed
  subscribers: SubTable;
}
// Initialize the database connection

export const db = createKysely<Database>()

export default db;
