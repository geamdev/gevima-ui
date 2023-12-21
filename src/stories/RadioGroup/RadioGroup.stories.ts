import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from '.';

const meta: Meta = {
  title: 'GevimaUI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
<RadioGroup
  label="RadioGroup"
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]}
/>
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'RadioGroup',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Secondary: Story = {
  args: {
    label: 'RadioGroup',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<RadioGroup
  label="RadioGroup"
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]}
  variant="secondary"
/>
        `,
      },
    },
  },
};
