import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  VTEX_URL,
  VTEX_AUTH_URL,
  VTEX_APPKEY,
  VTEX_APPTOKEN,
  VTEX_APPKEY_PROD,
  VTEX_APPTOKEN_PROD,
  VTEX_TOKEN,
  VTEX_ACCOUNT,
  AN_AFFILIATE,
  AN_BASE,
  SALESCHANNEL,
  SALESCHANNEL_PROD,
  VTEX_ENVIRONMENT,
  VTEX_ACCOUNT_PROD,
  VTEX_ENVIRONMENT_PROD,
  PORT,
  BD_USER,
  BD_PASSWORD,
  BD_DATABASE,
  BD_SERVER,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  TOKEN_API,
  REFRESH_TOKEN,
  ACCESS_TOKEN,
  COTABEST_BASE_URL,
  URL_RESPONSE,
  WAREHOUSE_ID,
  CONNECTOR_NAME,
  CONNECTOR_ENDPOINT
} = process.env;

export const sqlSettings = {
  user: BD_USER,
  password: BD_PASSWORD,
  database: BD_DATABASE,
  server: BD_SERVER,
};
