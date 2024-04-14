import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../src/uikit/**/*.mdx",
    "../src/uikit/**/*.stories.@(ts|tsx)",
    "../src/components/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
}

export default config
