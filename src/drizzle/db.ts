import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

import { env } from '@/data/env/server';

// Initialize the postgres client
const client = postgres(env.DB_CONNECTION_STRING);

// Initialize Drizzle ORM with the postgres client
const db = drizzle({ client, schema });

export default db;
