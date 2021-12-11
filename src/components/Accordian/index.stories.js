import React from 'react';
import Accordian from './Accordian.js';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'Accordian',
  component: Accordian,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <Accordian
    id={text('id', 'accordianId')}
    header={text('header', 'Accordian Header')}
    count={number('count', 6)}
    isSecondary={boolean('isSecondary', false)}
    defaultActive={boolean('defaultActive', false)}
  >
    <div>Accordian Content</div>
  </Accordian>
};

export const activeAccordian = () => <Accordian
  id={text('id', 'accordianId')}
  header={text('header', 'Accordian Header')}
  children={<div>Accordian Header</div>}
  defaultActive
/>;

export const secondaryAccordian = () => <Accordian
  id={text('id', 'accordianId')}
  header={text('header', 'Accordian Header')}
  children={<div>Accordian Secondard</div>}
  count={number('count', 6)}
  isSecondary={boolean('isSecondary', true)}
/>;
