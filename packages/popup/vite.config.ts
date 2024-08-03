import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "../../public",
  base: "",
  root: __dirname,
  build: {
    outDir: "../../dist/popup",
  },
});
