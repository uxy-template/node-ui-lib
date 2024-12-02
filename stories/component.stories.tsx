import { Meta, StoryObj } from "storybook-solidjs";
import { Counter, CounterProps } from "@components";
import { JSX } from "solid-js";

const meta: Meta<typeof Counter> = {
  component: Counter,
  argTypes: {
    initialValue: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    initialValue: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const CounterStory: Story = {
  render: (args: JSX.IntrinsicAttributes & CounterProps) => {
    return <Counter {...args}></Counter>;
  },
};
