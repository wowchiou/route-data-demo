import React from 'react';
import UserDemoC from './UserDemoC';

export default {
  title: 'Pagess/UserDemoC',
  component: UserDemoC,
};

const Template = (args) => <UserDemoC {...args} />;

export const primary = Template.bind({});
primary.args = {};
