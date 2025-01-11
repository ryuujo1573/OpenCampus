import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { user } from "./user";
import pkg from "../package.json";

const app = new Hono()
  .use(logger())
  .use("/consent", csrf())
  .get("/", (c) => {
    return c.text(`opencampus/${pkg.version}` as const);
  })
  .route("/user", user);

export default app;
