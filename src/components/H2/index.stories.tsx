import React from 'react'
import H2 from "./index";

export default {
  title: 'Components/H2',
  component: H2,
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
        <H2>Simple H2</H2>
      </div>
  )
}
