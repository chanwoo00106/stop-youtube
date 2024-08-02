import { build } from "vite";

build({
  configFile: "packages/popup/vite.config.ts",
  build: {
    watch: true,
  },
});

build({
  configFile: "packages/background/vite.config.ts",
  build: {
    watch: true,
  },
});
