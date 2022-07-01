import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CallOutComponent from './index';

export default {
  title: 'Pages/Home',
  component: CallOutComponent,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CallOutComponent>;

const Template: ComponentStory<typeof CallOutComponent> = (args) => (
  <CallOutComponent {...args} />
);

export const CallOut = Template.bind({});
