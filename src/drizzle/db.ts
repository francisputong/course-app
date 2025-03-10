import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Initialize the postgres client
const client = postgres(process.env.NEXT_PUBLIC_SUPABASE_URL!);

// Initialize Drizzle ORM with the postgres client
const db = drizzle(client);

export default db;
