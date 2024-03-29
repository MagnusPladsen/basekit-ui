import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-themes";

export const parameters = {
  'data-theme-toggle': {
  querySelector: "html",
  "data-target": "theme",
  default: "light",
  values: {
    dark: "dark",
    light: "light",
  },
  lightFill: "#a05b00",
  darkFill: "#0926b5",
}  
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })]
  
};

export default preview;
