import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toolbar from '.';

export default {
  title: 'example/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args} />
);

export const BasicToolBar = Template.bind({});
BasicToolBar.args = {
  value: '',
  onChange: (txt) => console.log(txt),
};
