import React from "react"

import { SH1, SH2, SH3, SH4, SH5 } from "./_styles.ts"

type THeading = React.PropsWithChildren | React.HTMLAttributes<HTMLHeadElement>

export const H1: React.FC<THeading> = ({ children, ...rest }) => {
  return <SH1 {...rest}>{children}</SH1>
}

export const H2: React.FC<THeading> = ({ children, ...rest }) => {
  return <SH2 {...rest}>{children}</SH2>
}

export const H3: React.FC<THeading> = ({ children, ...rest }) => {
  return <SH3 {...rest}>{children}</SH3>
}

export const H4: React.FC<THeading> = ({ children, ...rest }) => {
  return <SH4 {...rest}>{children}</SH4>
}

export const H5: React.FC<THeading> = ({ children, ...rest }) => {
  return <SH5 {...rest}>{children}</SH5>
}
