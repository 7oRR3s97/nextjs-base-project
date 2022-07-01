import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePageComponent from './index';

export default {
  title: 'Pages/Home',
  component: HomePageComponent,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomePageComponent>;

const Template: ComponentStory<typeof HomePageComponent> = (args) => (
  <HomePageComponent {...args} />
);

export const Home = Template.bind({});
