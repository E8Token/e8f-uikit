import React from 'react';
import Wrapper from './Wrapper';
import {CardProps} from "./types";

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
}
export default Card
