import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxComp from './index';

export default {
  title: 'Example/Checkbox',
  component: CheckboxComp,
} as ComponentMeta<typeof CheckboxComp>;

const Template: ComponentStory<typeof CheckboxComp> = (args) => <CheckboxComp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox',
  checked: true,
  size: 'medium',
  onChange:(e) => {console.log(e)}
};


export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'CheckboxComp',
  onChange:(e) => {console.log(e)}

};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'CheckboxComp',
  checked: true,
  customColor: 'yellow',
  onChange:(e) => {console.log(e)}
};
