import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserPageComponent from './index';

export default {
  title: 'Pages/User',
  component: UserPageComponent,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof UserPageComponent>;

const Template: ComponentStory<typeof UserPageComponent> = (args) => (
  <UserPageComponent {...args} />
);

export const User = Template.bind({});
User.parameters = {
  nextRouter: {
    pathname: '/minhaconta',
  },
};
