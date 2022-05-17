import { SpaceProps, TypographyProps } from 'styled-system'
import React from "react";

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string
  fontStyle?: 'bold' | 'normal'
  fontWeight?: number
  fontSize?: string
  lineHeight?: string
  letterSpacing?: string

  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler
}
