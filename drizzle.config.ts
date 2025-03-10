import { defineConfig } from 'drizzle-kit';

import { env } from '@/data/env/server';

export default defineConfig({
  out: './src/drizzel/migrations',
  schema: './src/drizzle/schema.ts',
  strict: true,
  verbose: true,
  dbCredentials: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  dialect: 'postgresql',
});
