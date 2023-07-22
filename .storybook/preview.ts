import type { Preview } from '@storybook/react'
import '../src/app/styles/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
