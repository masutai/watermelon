import { Meta, StoryObj } from "@storybook/react";
import "../../../app/globals.css";
import SubNav from "./sub-nav";

const meta = {
  title: "components/layouts/Header/SubNav",
  component: SubNav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof SubNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
