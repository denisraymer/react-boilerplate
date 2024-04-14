import type { Meta, StoryObj } from "@storybook/react"

import { H4, H5 } from "../Heading"
import { Stack as _Stack } from "./_Stack.tsx"

const meta: Meta<typeof _Stack> = {
  title: "uikit/Layout/Stack",
  component: _Stack,
}

export default meta
type Story = StoryObj<typeof _Stack>

export const Stack: Story = {
  render: (args) => {
    return (
      <_Stack {...args}>
        <H4>Element</H4>
        <H5>Element</H5>
      </_Stack>
    )
  },
  args: {
    gap: 20,
  },
}
