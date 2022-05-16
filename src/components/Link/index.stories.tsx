import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Link from './index';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {

  },
} as ComponentMeta<typeof Link>;

export const Default: React.FC = () => {
  return (
      <div style={{
          display: "flex",
          flexDirection: 'column',
          backgroundColor: '#000',
          height: '100%',
          padding: '3rem'
      }}>
          <Link href="/?path=/story/components-link--default">Default</Link>
      </div>
  )
}