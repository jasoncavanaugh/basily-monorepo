import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./utils/auth";
import { env } from "./utils/env";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>({
  strict: false,
});

// CORS should be called before the route
app.use("/api/*", cors({ origin: `https://${env.ALLOWED_ORIGINS}` }));

app.on(["POST", "GET"], "/api/auth/**", (c) => {
  return auth.handler(c.req.raw);
});

app.use("/api/protected/**", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    c.set("user", null);
    c.set("session", null);
    await next();
    return;
  }
  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});

app.get("/api/protected/session", (c) => {
  const session = c.get("session");
  const user = c.get("user");

  if (!user) return c.body(null, 401);
  return c.json({
    session,
    user,
  });
});

app.get("/", (c) => {
  return c.text("Hello from Hono!");
});

app.get("/api/routes/jason", (c) => {
  return c.json({ message: "Hi Jason" });
});

export default app;
