import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";
import Tooltip from "../components/Tooltip/Tooltip.component";
import "../index.css";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content that will be wrapped by the tooltip.",
      type: { name: "string" },
      control: { type: ["text", "React.ReactNode"] },
      defaultValue: "Hover me",
    },
    text: {
      description: "The text that will be displayed inside the tooltip.",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "Tooltip text",
    },
    className: {
      description: "The class name for the tooltip content.",
      type: { name: "string" },
      control: { type: "text" },
    },
    skipDelayDuration: {
      description: "The duration from when the pointer enters the trigger until the tooltip gets opened.",
      type: { name: "number" },
      control: { type: "number" },
    },
    defaultOpen: {
      description: "The default state of the tooltip.",
      type: { name: "boolean" },
      control: { type: "boolean" },
    },
    open: {
      description: "The state of the tooltip.",
      type: { name: "boolean" },
      control: { type: "boolean" },
    },
    delayDuration: {
      description: "The duration from when the pointer enters the trigger until the tooltip gets opened.",
      type: { name: "number" },
      control: { type: "number" },
    },
    disableHoverableContent: {
      description: "When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      type: { name: "boolean" },
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Hover me",
    text: "Tooltip text",

  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "Hover me",

  },
};

export const TooltipWithButton: Story = {
  args: {
    children: <Button>Hover me</Button>,
    text: "This can be used with different components",
  },
};


export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
