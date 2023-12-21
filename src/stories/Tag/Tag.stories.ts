import type { Meta, StoryObj } from '@storybook/react';

import Tag from '.';

const meta: Meta = {
  title: 'GevimaUI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Tag>Tag</Tag>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tag',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: '<Tag variant="secondary">Tag</Tag>',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Tag',
    variant: 'outline',
  },
  parameters: {
    docs: {
      source: {
        code: '<Tag variant="outline">Tag</Tag>',
      },
    },
  },
};

export const Icon = {
  args: {
    children: 'Tag',
    unremovable: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<Tag unremovable>Tag</Tag>',
      },
    },
  },
};
