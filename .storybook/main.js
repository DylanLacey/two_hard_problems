module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};


// // Remove if test works
// import { configure } from '@storybook/react';
// import '../src/index.css';

// configure(require.context('../src', true, /\.stories\.js$/), module);

if (typeof window === 'object') {
  window.__screener_storybook__ = require('@storybook/react').getStorybook;
}
