import React from 'react';
import {Text, TextProps} from "../Text";

const H2: React.FC<TextProps> = ({ ...props }) => {
    return <Text
        fontStyle='normal'
        fontWeight={700}
        fontSize='36px'
        lineHeight='172.9%'
        letterSpacing='0.055em'

        {...props}
    />
}

export default H2;
