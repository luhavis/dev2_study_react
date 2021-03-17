import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  require('../src/stories/InputStory');
}

setAddon(JSXAddon);
configure(loadStories, module);
