import React from "react"

import { SBody1, SBody2 } from "./_styles.ts"

type TBody = React.PropsWithChildren | React.HTMLAttributes<HTMLParagraphElement>

export const Body1: React.FC<TBody> = ({ children, ...rest }) => {
  return <SBody1 {...rest}>{children}</SBody1>
}

export const Body2: React.FC<TBody> = ({ children, ...rest }) => {
  return <SBody2 {...rest}>{children}</SBody2>
}
