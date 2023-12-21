import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '.';

const meta = {
  title: 'GevimaUI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Skeleton />',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 200,
    height: 30,
  },
  parameters: {
    docs: {
      source: {
        code: '<Skeleton variant="rounded" width={200} height={30} />',
      },
    },
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: 40,
    height: 40,
  },
  parameters: {
    docs: {
      source: {
        code: '<Skeleton variant="circle" width={40} height={40} />',
      },
    },
  },
};
