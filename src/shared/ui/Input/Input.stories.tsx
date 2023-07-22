import { Input } from './Input'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'shared/Input',
  args: {
    value: 'text',
    autofocus: true,
    size: 'medium',
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {}
export const Large: Story = {
  args: {
    size: 'large',
  },
}
export const Small: Story = {
  args: {
    size: 'small',
  },
}
