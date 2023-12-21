import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta = {
  title: 'GevimaUI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Input label="Input" />',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Input',
  },
};

export const Error: Story = {
  args: {
    label: 'Input',
    message: 'Este campo es requerido',
    variant: 'error',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Input
  label="Input"
  message="Este campo es requerido"
  variant="error"
/>
        `,
      },
    },
  },
};

export const Success: Story = {
  args: {
    label: 'Input',
    message: 'Todo se ha completado con exito',
    variant: 'success',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Input
  label="Input"
  message="Todo se ha completado con exito"
  variant="success"
/>
        `,
      },
    },
  },
};
