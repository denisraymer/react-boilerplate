import type { Meta, StoryObj } from "@storybook/react"

import { ContactLink } from "./_ContactLink.tsx"
import { EmailIcon, PhoneIcon } from "../../components/icons"

const meta: Meta<typeof ContactLink> = {
  title: "uikit/Contacts/ContactLink",
  component: ContactLink,
}

export default meta
type Story = StoryObj<typeof ContactLink>

export const EmailLink: Story = {
  render: (args) => <ContactLink {...args} />,
  args: {
    href: "mailto:info@ke.kg",
    children: "info@ke.kg",
    icon: <EmailIcon />,
  },
}

export const PhoneLink: Story = {
  render: (args) => <ContactLink {...args} />,
  args: {
    href: "tel:+996(880)00-00-15",
    children: "+996 (880) 00-00-15",
    icon: <PhoneIcon />,
  },
}
