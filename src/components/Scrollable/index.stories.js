import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import Scrollable from './Scrollable.js';
import ScrollableItem from './ScrollableItem.js';

export default {
  title: 'Scrollable',
  component: Scrollable,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};
export const Default = () => {
  return <Scrollable>
    <ScrollableItem>1</ScrollableItem>
    <ScrollableItem>2</ScrollableItem>
    <ScrollableItem>3</ScrollableItem>
    <ScrollableItem>4</ScrollableItem>
    <ScrollableItem>5</ScrollableItem>
    <ScrollableItem>6</ScrollableItem>
    <ScrollableItem>7</ScrollableItem>
    <ScrollableItem>8</ScrollableItem>
    <ScrollableItem>9</ScrollableItem>
    <ScrollableItem>10</ScrollableItem>
  </Scrollable>
};