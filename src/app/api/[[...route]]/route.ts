import americanToBritish from "@/data/american_to_biritish.json";
import englishList from "@/data/english_list.json";
import errorMessage from "@/data/error_message.json";
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
  return c.json(americanToBritish);
});

app.get("/words/list", (c) => {
  return c.json(englishList);
});

app.get("/error-message", (c) => {
  return c.json(errorMessage);
});

export const GET = handle(app);
export const POST = handle(app);
