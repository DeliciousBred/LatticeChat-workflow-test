import * as z from "zod";
import "dotenv/config";

const envSchema = z.object({
  HOST: z.string(),
  PORT: z.string(),
  BASE_URL: z.url(),
  BETTER_AUTH_SECRET: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_HOSTNAME: z.string(),
  DB_PORT: z.string(),
});

export const ENV = envSchema.parse({
  host: process.env.HOST,
  port: process.env.PORT,
  baseUrl: process.env.HOST + ":" + process.env.PORT,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOSTNAME: process.env.DB_HOSTNAME,
  DB_PORT: process.env.DB_PORT,
});
