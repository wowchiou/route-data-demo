import React from 'react';
import Form from './FormTemp';

export default {
  title: 'Containers/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const primary = Template.bind({});
primary.args = {};
