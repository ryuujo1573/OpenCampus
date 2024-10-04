import Ory from "@ory/client";
import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";

const api = new Ory.FrontendApi(
  new Ory.Configuration({
    basePath:
      process.env.KRATOS_BASE_URL ?? "https://playground.projects.oryapis.com",
  }),
);

const app = new Hono()
  .use(logger())
  .use("/consent", csrf())
  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

export default app;
