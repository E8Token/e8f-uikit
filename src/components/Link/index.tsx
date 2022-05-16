import React, {AnchorHTMLAttributes} from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import { getExternalLinkProps } from "../../components-utils";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean
}

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
    const internalProps = external ? getExternalLinkProps() : {}
    return <Wrapper
        {...internalProps}
        {...props}
    />
}

export default Link;
