import { defineConfig } from "@rslib/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2021",
      dts: true,
    },
  ],
  plugins: [pluginBabel(), pluginSolid()],
});
