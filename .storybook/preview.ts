import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';

import '../src/styles/bbodek-theme.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { onClick: fn() },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
