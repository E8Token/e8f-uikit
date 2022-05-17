import React from 'react';
import {Text, TextProps} from "../Text";

const H1: React.FC<TextProps> = ({ ...props }) => {
    return <Text
        fontStyle='normal'
        fontWeight={700}
        fontSize='40px'
        lineHeight='49px'
        letterSpacing='0.055em'

        {...props}
    />
}

export default H1;
