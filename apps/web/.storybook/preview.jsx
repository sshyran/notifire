import React from 'react';
import { ThemeProvider } from '../src/design-system/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from './Doc.container';

export const parameters = {
  layout: 'fullscreen',
  viewMode: 'docs',
  docs: {
    container: DocsContainer,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function ThemeWrapper(props) {
  return (
    <div style={{ margin: '3em' }}>
      <ThemeProvider colorSchemeOverride={useDarkMode() ? 'dark' : 'light'}>{props.children}</ThemeProvider>
    </div>
  );
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
