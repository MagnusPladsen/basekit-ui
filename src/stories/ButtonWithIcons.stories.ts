import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../index.css";
import buttonVariants from "../components/Button/Button.styles";
import { SquareArrowOutUpRight } from "lucide-react";
import { iconList } from "../components/Icons/Icons.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button With Icons",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      description: "Select button variant",
      control: {
        type: "select",
      },
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "ghost",
        "link",
      ],
      defaultValue: "default",
    },
    children: {
      description: "Button children content",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "Button",
    },
    href: {
      description:
        "If href is provided, the button will be rendered as an anchor element with the specified href attribute.",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    onClick: {
      description: "Function to be called on button click",
      type: { name: "function" },
      control: { type: null },
    },
    disableDefaultIcon: {
      description:
        "The disableIcon prop is a boolean that is used to determine whether the default icon, if any, should be rendered. DefaultIcon is rendered if specified variant has an icon",
      type: { name: "boolean" },
      control: { type: "boolean" },
      defaultValue: false,
    },
    loading: {
      description:
        "The loading prop is a boolean that is used to determine whether the loading spinner should be rendered.",
      type: { name: "boolean" },
      control: { type: "boolean" },
      defaultValue: false,
    },
    arrow: {
      description: "Shows arrow icon according to the direction specified",
      type: { name: "string" },
      control: { type: "select" },
      options: ["up", "down", "left", "right"],
      defaultValue: "",
    },
    icon: {
      description: "Icon to be displayed",
      type: { name: "string" },
      control: { type: "select" },
      options: Object.keys(iconList),
      defaultValue: "",
    },
    iconLocation: {
      description: "Icon location",
      type: { name: "string" },
      control: { type: "select" },
      options: ["left", "right"],
      defaultValue: "",
    },
    iconSize: {
      description: "Icon size",
      type: { name: "number" },
      control: { type: "number" },
      defaultValue: 16,
    },
    iconColor: {
      description: "Icon color",
      type: { name: "string" },
      control: { type: "color" },
      defaultValue: "",
    },
    iconClassName: {
      description: "Icon class name",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    disableOnClickEffect: {
      description:
        "The disableOnClickEffect prop is a boolean that is used to determine whether the onClick effect should be disabled.",
      type: { name: "boolean" },
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: "Button", variant: "default", href: "" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const defaultNoIcons: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const arrowRight: Story = {
  args: {
    variant: "default",
    children: "Right",
    arrow: "right",
  },
};

export const arrowLeft: Story = {
  args: {
    variant: "default",
    children: "Left",
    arrow: "left",
  },
};

export const arrowUp: Story = {
  args: {
    variant: "default",
    children: "Up",
    arrow: "up",
  },
};

export const arrowDown: Story = {
  args: {
    variant: "default",
    children: "Down",
    arrow: "down",
  },
};

export const AlertWithIcon: Story = {
  args: {
    variant: "destructive",
    children: "Alert",
    icon: "CircleAlert",
    iconLocation: "left",
    iconSize: 16,
    disableOnClickEffect: true,
  },
};

export const LinkWithSpecifiedIcon: Story = {
  args: {
    variant: "link",
    children: "Custom link",
    icon: "ArrowRight",
    iconLocation: "right",
    disableDefaultIcon: true,
  },
};

export const AddButton: Story = {
  args: {
    variant: "default",
    children: "Add",
    icon: "CirclePlus",
    iconLocation: "left",
    iconSize: 16,
  },
};

export const MenuButton: Story = {
  args: {
    variant: "default",
    children: "Menu",
    icon: "Menu",
    iconLocation: "left",
    iconSize: 16,
  },
};

export const DropDownButton: Story = {
  args: {
    variant: "default",
    children: "Dropdown",
    icon: "ChevronDown",
    iconLocation: "right",
    iconSize: 16,
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
