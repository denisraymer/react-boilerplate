import React from "react"

import { SCap1, SCap2, SCap3 } from "./_styles.ts"

type TCaption = React.PropsWithChildren | React.HTMLAttributes<HTMLParagraphElement>

export const Cap1: React.FC<TCaption> = ({ children, ...rest }) => {
  return <SCap1 {...rest}>{children}</SCap1>
}

export const Cap2: React.FC<TCaption> = ({ children, ...rest }) => {
  return <SCap2 {...rest}>{children}</SCap2>
}

export const Cap3: React.FC<TCaption> = ({ children, ...rest }) => {
  return <SCap3 {...rest}>{children}</SCap3>
}
