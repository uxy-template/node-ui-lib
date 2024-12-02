import { Meta, StoryObj } from "storybook-solidjs";
import { JSX } from "solid-js";
import { KeyboardProvider } from "@contexts";

const meta: Meta = {
  decorators: [
    (Story) => {
      return (
        <KeyboardProvider>
          <Story />
        </KeyboardProvider>
      );
    },
  ],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj;

export const KeyboardStory: Story = {
  render: (args: JSX.IntrinsicAttributes) => {
    return <div></div>;
  },
};
