import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppLoaderComponent from './index';

export default {
  title: 'Components',
  component: AppLoaderComponent,
} as ComponentMeta<typeof AppLoaderComponent>;

const Template: ComponentStory<typeof AppLoaderComponent> = (args) => (
  <AppLoaderComponent {...args} />
);

export const AppLoader = Template.bind({});
