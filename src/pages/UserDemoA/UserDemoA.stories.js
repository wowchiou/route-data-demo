import React from 'react';
import UserDemoA from './UserDemoA';

export default {
  title: 'Pagess/UserDemoA',
  component: UserDemoA,
};

const Template = (args) => <UserDemoA {...args} />;

export const primary = Template.bind({});
primary.args = {};
