import { createKysely } from "@vercel/postgres-kysely";

// Define your table structures here
interface BlogTable {
  id: number;
  title: string;
  content: string;
  author: string;
  post_date: string;
}

interface Database {
  blog: BlogTable; // Add other tables as needed
}
// Initialize the database connection

export const db = createKysely<Database>()

export default db;
