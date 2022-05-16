import React from 'react';

import { TextProps } from "./types";
import styled from "styled-components";

const Text = styled.div<TextProps>`
  font-family: 'Montserrat';
  
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};

  color: ${props => props.color};
`

Text.defaultProps = {
    color: '#ffffff',
    fontStyle: 'bold',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '172.9%',
    letterSpacing: '0.055em'
}

export default Text;
