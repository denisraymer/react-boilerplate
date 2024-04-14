import React from "react"
import styled from "styled-components"

import { Cap2 } from "../Caption"
import { Stack } from "../Stack"

interface IContactLink extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  href: string
  icon: JSX.Element
}

export const ContactLink: React.FC<IContactLink> = ({ href, icon, children }) => (
  <Stack>
    <SBlockIcon>{icon}</SBlockIcon>
    <Cap2>
      <a href={href}>{children}</a>
    </Cap2>
  </Stack>
)

const SBlockIcon = styled.div`
  border-radius: 50px;
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`
