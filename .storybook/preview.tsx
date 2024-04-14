import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import { StyleProvider } from "../src/styles/StyleProvider/StyleProvider.tsx"

const preview: Preview = {
  parameters: {
    // layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        {
          name: "dark",
          value: "#131314",
        },
      ],
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    (Story) => (
      <StyleProvider>
        <Story />
      </StyleProvider>
    ),
  ],
}

export default preview
