import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
    isOutlined: {
      name: 'isOutlined',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
    withoutHover: {
      name: 'withoutHover',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
    withoutPointer: {
      name: 'withoutPointer',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const DefaultButton = Template.bind({});

export const HandleRoute = Template.bind({});
HandleRoute.args = {
  handleRoute: () => {},
};

export const Outlined = Template.bind({});
Outlined.args = {
  isOutlined: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
