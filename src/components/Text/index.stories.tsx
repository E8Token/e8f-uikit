import React from 'react'
import Text from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    bold: {
      name: 'bold',
      table: {
        type: { summary: 'bool', detail: 'Bold the text' },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: 'fontSize',
      table: {
        type: { summary: 'string', detail: 'Fontsize in px or em' },
        defaultValue: { summary: '16px' },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: 'color',
      table: {
        type: { summary: 'string', detail: 'Color from the theme, or CSS color' },
        defaultValue: { summary: 'theme.colors.text' },
      },
      control: {
        type: null,
      },
    },
  },
}

export const Default: React.FC = () => {
  return (
      <div style={{
        display: "flex",
        flexDirection: 'column',
        backgroundColor: '#000',
        height: '100%',
        padding: '3rem'
      }}>
        <Text>Default</Text>
        <Text fontStyle='bold'>Bold text</Text>
        <Text fontStyle='normal'>Small text</Text>
        <Text fontSize="24px">Custom fontsize</Text>
        <Text color="red">Custom color</Text>
      </div>
  )
}
