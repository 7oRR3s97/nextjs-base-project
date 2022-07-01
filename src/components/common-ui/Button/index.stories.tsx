import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'CommonUI/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Link = Template.bind({});
Link.args = {
  layout: 'link',
  children: 'button',
  fullWidth: false,
  isLoading: false,
  disabled: false,
  newWindow: false,
  href: undefined,
  icon: undefined,
  variantText: 'body1',
};

export const SelectedUnderlined = Template.bind({});
SelectedUnderlined.args = {
  ...Link.args,
  layout: 'selectedUnderlined',
};

export const Halfline = Template.bind({});
Halfline.args = {
  ...Link.args,
  layout: 'halfline',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Link.args,
};

export const Outlinedblack = Template.bind({});
Outlinedblack.args = {
  ...Link.args,
  layout: 'outlinedBlack',
};

export const Icon = Template.bind({});
Icon.args = {
  ...Link.args,
  layout: 'icon',
};

export const IconUnderlined = Template.bind({});
IconUnderlined.args = {
  ...Link.args,
  layout: 'iconUnderlined',
};

export const Box = Template.bind({});
Box.args = {
  ...Link.args,
  layout: 'box',
};

export const Filled = Template.bind({});
Filled.args = {
  ...Link.args,
  layout: 'filled',
};

export const FilledBlack = Template.bind({});
FilledBlack.args = {
  ...Link.args,
  layout: 'filledBlack',
};

export const FilledWhite = Template.bind({});
FilledWhite.args = {
  ...Link.args,
  layout: 'filledWhite',
};

export const FilledBoxShadowMain = Template.bind({});
FilledBoxShadowMain.args = {
  ...Link.args,
  layout: 'filledBoxShadowMain',
};

export const FilledBoxShadowWhite = Template.bind({});
FilledBoxShadowWhite.args = {
  ...Link.args,
  layout: 'filledBoxShadowWhite',
};

export const Gradient = Template.bind({});
Gradient.args = {
  ...Link.args,
  layout: 'gradient',
};

export const Footer = Template.bind({});
Footer.args = {
  ...Link.args,
  layout: 'footer',
};

export const Quiz = Template.bind({});
Quiz.args = {
  ...Link.args,
  layout: 'quiz',
};

export const Text = Template.bind({});
Text.args = {
  ...Link.args,
  layout: 'text',
};

export const Gray = Template.bind({});
Gray.args = {
  ...Link.args,
  layout: 'gray',
};

export const GrayOutlined = Template.bind({});
GrayOutlined.args = {
  ...Link.args,
  layout: 'grayOutlined',
};

export const SquareUpDown = Template.bind({});
SquareUpDown.args = {
  ...Link.args,
  layout: 'squareUpDown',
};

export const Alert = Template.bind({});
Alert.args = {
  ...Link.args,
  layout: 'alert',
};
