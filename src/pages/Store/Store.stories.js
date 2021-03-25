import React from 'react';
import Store from './Store';

export default {
  title: 'Pagess/Store',
  component: Store,
};

const Template = (args) => <Store {...args} />;

export const primary = Template.bind({});
primary.args = {};
