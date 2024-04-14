import React from "react"
import styled, { css } from "styled-components"

import { TNumValue } from "@/types/_common.types.ts"

type TFlexDirection = React.CSSProperties["flexDirection"]
type TAlignItems = React.CSSProperties["alignItems"]

interface IStack extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  gap?: TNumValue
  flexDirection?: TFlexDirection
  alignItems?: TAlignItems
}

export const Stack: React.FC<IStack> = ({
  gap = 10,
  flexDirection = "row",
  alignItems = "center",
  children,
}) => (
  <SStack $gap={gap} $flexDirection={flexDirection} $alignItems={alignItems}>
    {children}
  </SStack>
)

const SStack = styled.div<{
  $gap: TNumValue
  $flexDirection: TFlexDirection
  $alignItems: TAlignItems
}>(
  ({ $gap, $flexDirection, $alignItems }) => css`
    display: flex;
    gap: ${$gap}px;
    flex-direction: ${$flexDirection};
    align-items: ${$alignItems};
  `
)
