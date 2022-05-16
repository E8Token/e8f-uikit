import React from 'react';
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Row = styled.div`
  margin-bottom: 32px;
`

export const Default: React.FC = () => {
  return (
      <div style={{
          display: "flex",
          flexDirection: 'column',
          backgroundColor: '#000',
          height: '100%',
          padding: '3rem'
      }}>
          <div style={{ padding: '32px', width: '500px' }}>
            <Row>
              <Card
              >
                <div
                    style={{
                        padding: '10px',
                    }}
                >
                    <span
                        style={{
                            color: '#ffffff',
                            margin: '10px',
                            lineHeight: '25px',
                        }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                </div>
              </Card>
            </Row>
          </div>
      </div>
  )
}
