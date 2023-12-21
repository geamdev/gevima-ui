import type { Meta, StoryObj } from '@storybook/react';

import Select from '.';

const meta = {
  title: 'GevimaUI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
<Select
  label="Select"
  items={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  renderItem={(item) => item.value}
/>
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select',
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderItem: (item) => item.value,
  },
};

export const Error: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
<Select
  label="Select"
  items={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  renderItem={(item) => item.value}
  error="This field is required"
/>
        `,
      },
    },
  },
  args: {
    label: 'Select',
    error: 'This field is required',
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderItem: (item) => item.value,
  },
};
