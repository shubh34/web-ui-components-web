import React, { useState } from 'react';
import TextArea from './TextArea.js';
import { withKnobs, number, text,} from "@storybook/addon-knobs";

export default { 
  title: 'TextArea',
  component: TextArea,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  const [value, setTextValue] = useState('')
  return <TextArea
    onChange={(e) => setTextValue(e.target.value)}
    value = {value}
    maxChar={number('maxChar',200 )}
    placeholder={text('placeholder','Enter text here!!' )}
  />
};
