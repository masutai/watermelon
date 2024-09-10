import { british } from "@/data/biritish";
import { words } from "@/data/words";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!"
  });
});

app.get("/words/british", (c) => {
  return c.json(british);
});

app.get("/words/list", (c) => {
  return c.json(words);
});

export const GET = handle(app);
export const POST = handle(app);
