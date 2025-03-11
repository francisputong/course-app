import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    DB_CONNECTION_STRING: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
