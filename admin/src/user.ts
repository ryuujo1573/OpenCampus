import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { api } from "./api";

export const user = new Hono() //
  .post(
    "/login",
    zValidator(
      "form",
      z.object({
        uid: z.string(),
        password: z.string(),
      })
    ),
    (ctx) => {
      const payload = ctx.req.valid("form");
      api
      return ctx.json({
        code: 0,
        uid: payload.uid,
        msg: "mock: " + payload.password,
      });
    }
  );
