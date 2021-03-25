import React from 'react';
import User from './User';

export default {
  title: 'Pagess/User',
  component: User,
};

const Template = (args) => <User {...args} />;

export const primary = Template.bind({});
primary.args = {};
