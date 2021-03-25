import React from 'react';
import UserDemoB from './UserDemoB';

export default {
  title: 'Pagess/UserDemoB',
  component: UserDemoB,
};

const Template = (args) => <UserDemoB {...args} />;

export const primary = Template.bind({});
primary.args = {};
