import { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { themes } from "storybook/internal/theming";
import "../src/app/globals.css";

const withThemeProvider = (Story) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    themes: themes.light
  }
};

export default preview;
