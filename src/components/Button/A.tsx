import React from 'react';
import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const A = styled((props: any) => (
    <a
        {...props}
    />
))`
  ${(props) => buttonStyles(props)};
`;

export default A;

