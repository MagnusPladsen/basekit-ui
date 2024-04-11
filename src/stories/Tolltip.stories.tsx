import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import Tooltip from "../components/Tooltip/Tooltip.component";
import { Button } from "../components";
import { BKButtonProps } from "../components/Button/Button.types";

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
