import React from 'react';
import News from './News';

export default {
  title: 'Pagess/News',
  component: News,
};

const Template = (args) => <News {...args} />;

export const primary = Template.bind({});
primary.args = {};
