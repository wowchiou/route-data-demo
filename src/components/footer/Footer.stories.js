import React from 'react';
import Footer from './Footer';

export default {
  title: 'Componentss/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {};
