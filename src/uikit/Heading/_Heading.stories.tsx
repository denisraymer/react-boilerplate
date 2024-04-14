import type { Meta, StoryObj } from "@storybook/react"

import {
  H1 as Heading1,
  H2 as Heading2,
  H3 as Heading3,
  H4 as Heading4,
  H5 as Heading5,
} from "./_Heading"

const meta: Meta<typeof Heading1> = {
  title: "uikit/Typography/Heading",
  component: Heading1,
}

export default meta
type Story = StoryObj<typeof Heading1>

export const H1: Story = {
  render: (args) => <Heading1 {...args} />,
  args: {
    children: "Надежность, качество и инновации в мире электроники",
  },
}

export const H2: Story = {
  render: (args) => <Heading2 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}

export const H3: Story = {
  render: (args) => <Heading3 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}

export const H4: Story = {
  render: (args) => <Heading4 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}

export const H5: Story = {
  render: (args) => <Heading5 {...args} />,
  args: {
    children: "Ваш успех наша цель",
  },
}
