import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';
import { withThemeByClassName } from '@storybook/addon-themes'
import '../index.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'variant', options: ['contained', 'outlined', 'text'], href: ""},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Button', variant: 'default', href: ""},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const primary: Story = {
  args: {
    variant: "default",
    children: 'Default',
  },
};

export const secondary: Story = {
  args: {
    variant: "secondary",
    children: 'Secondary',
  },
};

export const outline: Story = {
  args: {
    variant: "outline",
    children: 'Outline',
  },
};

export const destructive: Story = {
  args: {
    variant: "destructive",
    children: 'Destructive',
  },
};

export const ghost: Story = {
  args: {
    variant: "ghost",
    children: 'Ghost',
  },
};

export const link: Story = {
  args: {
    variant: "link",
    children: 'Link',
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
