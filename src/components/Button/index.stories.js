import React from 'react';
import  Button from './Button.js';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default { 
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <Button
    id={text('id', 'buttonId' )}
    onClick={action('button-click')}
    className={text('className', 'buttonId' )}
    name={text('name', 'Default Button' )}
    disabled={boolean('disabled', false )}
    type={text('type', 'button' )}
    themed={boolean('themed', true )}
    badge={boolean('badge', false )}
  />;
};
export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);