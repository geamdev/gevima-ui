import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta = {
  title: 'GevimaUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: '<Button>Button</Button>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button variant="outline">Button</Button>',
      },
    },
  },
};

export const Transparent: Story = {
  args: {
    children: 'Button',
    variant: 'transparent',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button variant="transparent">Button</Button>',
      },
    },
  },
};

export const Icon: Story = {
  args: {
    children: 'Heart',
    icon: '❤️',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button icon="❤️">Heart</Button>',
      },
    },
  },
};

export const IconRight: Story = {
  args: {
    children: 'Heart',
    icon: '❤️',
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button icon="❤️" iconPosition="right">Heart</Button>',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    icon: '❤️',
    iconOnly: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<Button icon="❤️" iconOnly />',
      },
    },
  },
};

export const Loader: Story = {
  args: {
    children: 'Button',
    loading: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<Button loading>Button</Button>',
      },
    },
  },
};
