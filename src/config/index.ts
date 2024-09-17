import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const {
  NODE_ENV,
  ORIGIN,
  LOG_DIR,
  PORT,
} = process.env;
