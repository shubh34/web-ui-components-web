import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import Badge from './Badge.js';

export default { 
  title: 'Badge',
  component: Badge,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <Badge
    name="Badge"
  />
};