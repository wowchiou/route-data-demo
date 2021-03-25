import React from 'react';
import Header from './Header';

export default {
  title: 'Componentss/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const primary = Template.bind({});
primary.args = {};
