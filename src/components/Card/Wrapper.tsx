import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(({...rest}: any) => (
    <div
        {...rest}
    />
))`
  & {
    position: relative;
    text-align: center;
    background: ${props => props.theme.cardBackgroundLinearGradient};
    border-radius: 8px;
  }
  
  &:hover::before,
  &:active::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1px;
    background: ${props => props.theme.cardBorderBackgroundLinearGradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export default Wrapper;
