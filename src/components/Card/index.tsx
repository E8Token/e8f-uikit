import React, {HTMLAttributes} from 'react';
import Wrapper from './Wrapper';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {

}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
}
export default Card
