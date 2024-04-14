import styled, { css } from "styled-components"

export const SBody1 = styled("p")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.body.body1.lg.fontSize};
    line-height: 140%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.body.body1.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.body.body1.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.body.body1.xs.fontSize};
    }
  `
)

export const SBody2 = styled("p")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.body.body2.lg.fontSize};
    line-height: 160%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.body.body2.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.body.body2.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.body.body2.xs.fontSize};
    }
  `
)
