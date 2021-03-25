import React from 'react';
import PageTemplate from './PageTemplate';

export default {
  title: 'Containerss/PageTemplate',
  component: PageTemplate,
};

const Template = (args) => <PageTemplate {...args} />;

export const primary = Template.bind({});
primary.args = {};
