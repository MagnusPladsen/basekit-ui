import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import Icon, { iconList } from "../components/Icons/Icons.component";
import "../index.css";
import { BKIconProp } from "../components/Icons/Icons.type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Icon to be displayed",
      type: { name: "string" },
      control: { type: "select" },
      options: Object.keys(iconList),
      defaultValue: "",
    },
    size: {
      description: "Icon size",
      type: { name: "number" },
      control: { type: "number" },
      defaultValue: 16,
    },
    color: {
      description: "Icon color",
      type: { name: "string" },
      control: { type: "color" },
      defaultValue: "",
    },
    className: {
      description: "Icon class name",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
  },
  args: { icon: "Calendar", size: 64 },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const ExampleCalendar: Story = {
  args: {
    icon: "Calendar",
    size: 64,
  },
};

export const ExampleMenu: Story = {
  args: {
    icon: "Menu",
    size: 64,
  },
};

export const ExampleLink: Story = {
  args: {
    icon: "Link",
    size: 64,
  },
};

export const ExampleSearch: Story = {
  args: {
    icon: "Search",
    size: 64,
  },
};

export const ExampleSpinner: Story = {
  args: {
    icon: "Spinner",
    size: 64,
    className: "animate-spin",
  },
};

export const ExampleChevronRight: Story = {
  args: {
    icon: "ChevronRight",
    size: 64,
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
