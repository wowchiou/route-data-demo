import React from 'react';
import Sign from './Sign';

export default {
  title: 'Pagess/Sign',
  component: Sign,
};

const Template = (args) => <Sign {...args} />;

export const primary = Template.bind({});
primary.args = {};
