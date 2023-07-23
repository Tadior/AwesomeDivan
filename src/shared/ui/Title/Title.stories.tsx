import { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'shared/Title',
  args: {
    text: 'test text, first letter in high register',
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {};
export const Dark: Story = {
  args: {
    colorMode: 'dark',
  },
};
