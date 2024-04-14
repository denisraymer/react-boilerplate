import styled, { css } from "styled-components"

export const SH1 = styled("h1")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.medium};
    font-size: ${theme.typography.heading.h1.lg.fontSize};
    line-height: 110%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.heading.h1.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.heading.h1.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.heading.h1.xs.fontSize};
    }
  `
)

export const SH2 = styled("h2")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.heading.h2.lg.fontSize};
    line-height: 120%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.heading.h2.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.heading.h2.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.heading.h2.xs.fontSize};
    }
  `
)

export const SH3 = styled("h3")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.heading.h3.lg.fontSize};
    line-height: 110%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.heading.h3.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.heading.h3.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.heading.h3.xs.fontSize};
    }
  `
)

export const SH4 = styled("h4")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.heading.h4.lg.fontSize};
    line-height: 110%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.heading.h4.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.heading.h4.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.heading.h4.xs.fontSize};
    }
  `
)

export const SH5 = styled("h5")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.heading.h5.lg.fontSize};
    line-height: 110%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.heading.h5.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.heading.h5.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.heading.h5.xs.fontSize};
    }
  `
)
