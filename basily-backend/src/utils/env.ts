import { z } from "zod";

// https://www.youtube.com/watch?v=q1im-hMlKhM
const envVariables = z.object({
  DATABASE_URL: z.string(),
  BETTER_AUTH_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  ALLOWED_ORIGINS: z.string(),
});

export const env = envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
