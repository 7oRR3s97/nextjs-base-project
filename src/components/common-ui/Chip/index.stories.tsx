import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChipComponent from './index';

export default {
  title: 'CommonUI/Chip',
  component: ChipComponent,
} as ComponentMeta<typeof ChipComponent>;

const Template: ComponentStory<typeof ChipComponent> = (args) => (
  <ChipComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'chip',
  error: false,
  success: false,
  warning: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'chip',
  error: true,
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'chip',
  warning: true,
};

export const Success = Template.bind({});
Success.args = {
  label: 'chip',
  success: true,
};
