import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ARG_REDUX_PATH } from 'addon-redux';

import EditDataComponent from './index';

export default {
  title: 'Components',
  component: EditDataComponent,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      [ARG_REDUX_PATH]: 'menu.editData',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof EditDataComponent>;

const Template: ComponentStory<typeof EditDataComponent> = (args) => (
  <EditDataComponent {...args} />
);

export const EditData = Template.bind({});
EditData.args = {
  storybook: true,
};
