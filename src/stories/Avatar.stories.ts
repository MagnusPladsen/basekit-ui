import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { Avatar } from "../components/Avatar/Avatar.component";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initials: {
      description: "Initials to be displayed as fallback",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    src: {
      description: "Image source",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    alt: {
      description: "Image alt",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
  },
  args: { initials: "JD", src: "", alt: "" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ExampleJohnDoeWithoutImage: Story = {
  args: {
    initials: "JD",
    src: "https://no.image.com",
    alt: "",
  },
};

export const ExampleJohnDoeWithImage: Story = {
  args: {
    initials: "MP",
    src: "https://i.pravatar.cc/300",
    alt: "Profile picture",
    },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
