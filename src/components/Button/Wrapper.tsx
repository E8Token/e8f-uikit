import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(({...rest}: any) => (
    <div
        {...rest}
    />
))`
  & {
    text-align: center;
    margin: 1vw;
  }
`;

export default Wrapper;
