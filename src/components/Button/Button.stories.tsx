import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button.component";

export default {
  title: "CleanUI/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  children: "Default button",
  primary: true,
};

export const ButtonTestSecondary = Template.bind({});
ButtonTestSecondary.args = {
  children: "Without primary prop",
};