import styled, { css } from "styled-components"

export const SCap1 = styled("p")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.caption.cap1.lg.fontSize};
    line-height: 140%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.caption.cap1.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.caption.cap1.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.caption.cap1.xs.fontSize};
    }
  `
)

export const SCap2 = styled("p")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.caption.cap2.lg.fontSize};
    line-height: 120%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.caption.cap2.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.caption.cap2.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.caption.cap2.xs.fontSize};
    }
  `
)

export const SCap3 = styled("p")(
  ({ theme }) => css`
    font-weight: ${theme.typography.weight.semibold};
    font-size: ${theme.typography.caption.cap3.lg.fontSize};
    line-height: 130%;

    @media (max-width: ${theme.screen.md}) {
      font-size: ${theme.typography.caption.cap3.md.fontSize};
    }

    @media (max-width: ${theme.screen.sm}) {
      font-size: ${theme.typography.caption.cap3.sm.fontSize};
    }

    @media (max-width: ${theme.screen.xs}) {
      font-size: ${theme.typography.caption.cap3.xs.fontSize};
    }
  `
)
