import React from 'react';
import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledButton = styled((props: any) => (
    <button
        {...props}
    />
))`
  ${(props) => buttonStyles(props)};
`;

export default StyledButton;
