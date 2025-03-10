import { defineConfig } from 'drizzle-kit';

import { env } from '@/data/env/server';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  strict: true,
  verbose: true,
  dbCredentials: {
    url: env.DB_CONNECTION_STRING,
  },
  dialect: 'postgresql',
});
