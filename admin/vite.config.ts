import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "index": "src/index.ts",
        "client": "src/client.ts"
      },
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
});
