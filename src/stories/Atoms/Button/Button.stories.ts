import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'outline'],
      description: '스타일 타입',
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    block: {
      options: [true, false],
      control: { type: 'radio' },
    },
    hasIconOnly: {
      options: [true, false],
      control: { type: 'radio' },
    },
    classNames: { control: false },
    href: { control: false },
    role: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: '버튼',
    size: 'medium',
    disabled: false,
    loading: false,
    block: false,
    hasIconOnly: false,
  },
};
