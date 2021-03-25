import React from 'react';
import Input from './Input';

export default {
  title: 'Componentss/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const primary = Template.bind({});
primary.args = {};
