import { Meta, StoryObj } from '@storybook/react';
import { CategoryBlock } from './CategoryBlock';

const meta: Meta<typeof CategoryBlock> = {
  component: CategoryBlock,
  title: 'widgets/CategoryBlock',
};

export default meta;

type Story = StoryObj<typeof CategoryBlock>;

export const Primary: Story = {};
