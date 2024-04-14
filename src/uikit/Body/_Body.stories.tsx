import type { Meta, StoryObj } from "@storybook/react"

import { Body1 as _Body1, Body2 as _Body2 } from "./_Body.tsx"

const meta: Meta<typeof _Body1> = {
  title: "uikit/Typography/Body",
  component: _Body1,
}

export default meta
type Story = StoryObj<typeof _Body1>

export const Body1: Story = {
  render: (args) => <_Body1 {...args} />,
  args: {
    children: "Надежность, качество и инновации в мире электроники",
  },
}

export const Body2: Story = {
  render: (args) => <_Body2 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}
