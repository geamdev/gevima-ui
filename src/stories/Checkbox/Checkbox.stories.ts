import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta: Meta = {
  title: 'GevimaUI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Checkbox />',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: '<Checkbox label="Checkbox" />',
      },
    },
  },
};

export const Error: Story = {
  args: {
    label: 'Checkbox',
    error: 'Este campo es requerido',
  },
  parameters: {
    docs: {
      source: {
        code: '<Checkbox label="Checkbox" error="Este campo es requerido" />',
      },
    },
  },
};
