import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: __dirname,
  build: {
    outDir: "../../dist/popup",
    lib: {
      entry: "./index.html",
      formats: ["es"],
      fileName: "[name]",
    },
  },
});
