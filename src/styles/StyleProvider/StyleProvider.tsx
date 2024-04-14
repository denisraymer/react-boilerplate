import React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./_GlobalStyle.ts"
import { theme } from "../theme.ts"

export const StyleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
