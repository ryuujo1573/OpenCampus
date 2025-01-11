import hono from "./index";
import { hc } from "hono/client";

export const createClient = hc<typeof hono>;
