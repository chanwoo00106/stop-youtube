import { build } from "vite";

build({
  configFile: "packages/popup/vite.config.ts",
});

build({
  configFile: "packages/background/vite.config.ts",
});
