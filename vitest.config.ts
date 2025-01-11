/// <reference types="vitest/globals" />

import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "admin/": resolve("admin/src/"),
    },
  },
  test: {
    globals: true,
  },
});
