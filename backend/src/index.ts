import { Hono } from "hono";
import { auth } from "./utils/auth";

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/test", (c) => {
  return c.json({ description: "Hi there again" });
});

export default app;
