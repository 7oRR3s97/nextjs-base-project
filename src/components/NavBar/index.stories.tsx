import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ARG_REDUX_PATH } from 'addon-redux';

import NavBar from './index';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    openEditData: {
      control: { type: 'boolean' },
      [ARG_REDUX_PATH]: 'menu.editData',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const HomePage = Template.bind({});

export const UserPage = Template.bind({});
UserPage.parameters = {
  nextRouter: {
    pathname: '/minhaconta',
  },
};
