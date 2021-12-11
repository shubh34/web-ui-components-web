import React from 'react';
import Radio from './Radio.js';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Radio',
  component: Radio,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <Radio
    id={text('id', 'defaultRadio')}
    className={text('className', '')}
    name={text('name', 'Radio Button')}
    checked={boolean('checked', false)}
    onChange={action('button-click')}
  />
};

export const Checked = () => {
  return <Radio
    id={text('id', 'defaultRadio')}
    className={text('className', '')}
    name={text('name', 'Radio Button')}
    checked={boolean('checked', true)}
    onChange={action('button-click')}
  />
};

