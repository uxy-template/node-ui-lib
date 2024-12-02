import type { StorybookConfig } from "storybook-solidjs-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          "@components": resolve(__dirname, "..", "src", "components"),
          "@contexts": resolve(__dirname, "..", "src", "contexts"),
        },
      },
    };
  },
};
export default config;
