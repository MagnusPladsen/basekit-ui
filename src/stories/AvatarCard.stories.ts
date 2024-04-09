import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import AvatarCard from "../components/AvatarCard/AvatarCard.component";

const meta = {
  title: "Components/AvatarCard",
  component: AvatarCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Name of the person",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    image: {
      description: "Image source",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    role: {
      description: "Role of the person",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
    bio: {
      description: "Bio of the person",
      type: { name: "string" },
      control: { type: "text" },
      defaultValue: "",
    },
  },
  args: {
    name: "John Doe",
    image: "https://i.pravatar.cc/300",
    role: "Software Engineer",
    bio: "This is a example for an avatar card.",
    phone: "123-456-7890",
    email: "john.doe@example.com",
  },
} satisfies Meta<typeof AvatarCard>;

export default meta;
type Story = StoryObj<typeof AvatarCard>;

export const ExampleJohnDoeSimple: Story = {
  args: {
    name: "John Doe",
    image: "https://no.image.com",
  },
};

export const ExampleJohnDoeRegular: Story = {
  args: {
    name: "John Doe",
    image: "https://i.pravatar.cc/300",
    role: "Software Engineer",
    bio: "This is a example for an avatar card.",
    phone: "123-456-7890",
    email: "john.doe@example.com",
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
