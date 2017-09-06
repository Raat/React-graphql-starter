import { configure, addDecorator} from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components\
})
addDecorator((story,context)=> withInfo()(story) (context))

import React from 'react'
import {storiesOf, action, linkTo, specs, describe, it} from "./facade";

global.storiesOf = storiesOf;
global.action = action;
global.linkTo = linkTo;
global.specs = specs;
global.describe = describe;
global.it = it;

const req = require.context('../app/', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
