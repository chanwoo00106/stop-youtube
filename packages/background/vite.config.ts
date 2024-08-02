import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  build: {
    outDir: "../../dist/background",
    lib: {
      entry: "./index.ts",
      formats: ["es"],
      fileName: "[name]",
    },
  },
});
