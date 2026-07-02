import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteConfig: () => {
    return {
      base: process.env.BASE_PATH || "/",
      resolve: {
        alias: {
          "@": "/src",
        },
      },
    };
  },
};

export default config;
