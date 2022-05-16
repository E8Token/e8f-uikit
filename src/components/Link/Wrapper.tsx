import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(({color, hoverColor, ...rest}: any) => (
    <a
        {...rest}
    />
))`
  & {
    display: flex;
    align-items: center;
    width: fit-content;
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.025em;
    cursor: pointer;
    
    text-decoration: none;

    color: ${props => props.color ? props.color : '#ffffff'};
  }
  
  &:hover,
  &:active {
    color: ${props => props.hoverColor ? props.hoverColor : props.theme.mainColor};
  }
`;

export default Wrapper;
