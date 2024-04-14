import type { Meta, StoryObj } from "@storybook/react"

import { Cap1 as Caption1, Cap2 as Caption2, Cap3 as Caption3 } from "./_Caption.tsx"

const meta: Meta<typeof Caption1> = {
  title: "uikit/Typography/Caption",
  component: Caption1,
}

export default meta
type Story = StoryObj<typeof Caption1>

export const Cap1: Story = {
  render: (args) => <Caption1 {...args} />,
  args: {
    children: "Надежность, качество и инновации в мире электроники",
  },
}

export const Cap2: Story = {
  render: (args) => <Caption2 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}

export const Cap3: Story = {
  render: (args) => <Caption3 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}
