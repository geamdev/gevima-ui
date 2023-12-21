import type { Meta, StoryObj } from '@storybook/react';

import Switch from '.';

const meta: Meta = {
  title: 'GevimaUI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Switch />',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Switch',
  },
  parameters: {
    docs: {
      source: {
        code: '<Switch label="Switch" />',
      },
    },
  },
};
