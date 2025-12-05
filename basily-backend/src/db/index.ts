import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../utils/env";
// import { account, days, expense_categories, expenses, session, user, userRelations, verification } from "./schema";
import * as schema from "./schema";

export const db = drizzle(postgres(env.DATABASE_URL), {
  schema: schema,
  casing: "snake_case",
});
