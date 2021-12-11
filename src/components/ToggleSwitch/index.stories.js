import React from 'react';
import ToggleSwitch from './ToggleSwitch.js';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default { 
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <ToggleSwitch
    id={text('id', 'defaultRadio' )}
    className={text('className', '' )}
    name={text('name', 'Toggle Switch' )}
    checked={boolean('checked',  false )}
    onChange={action('button-click')}
  />
};

export const Checked = () => {
  return <ToggleSwitch
    id={text('id', 'defaultRadio' )}
    className={text('className', '' )}
    name={text('name', 'Radio Button' )}
    checked={boolean('checked',  true )}
    onChange={action('button-click')}
    disabled={boolean('disabled',  false )}
  />
};

