import { Hono } from "hono";
import { auth } from "./utils/auth";
import { cors } from "hono/cors";
import { env } from "./utils/env";

const app = new Hono();
// CORS should be called before the route
app.use("/api/*", cors({ origin: `https://${env.ALLOWED_ORIGINS}` }));

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/test", (c) => {
  return c.json({ description: "Hi there again" });
});

export default app;
