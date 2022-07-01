import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BodyComponent from './index';

export default {
  title: 'Pages/User',
  component: BodyComponent,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BodyComponent>;

const Template: ComponentStory<typeof BodyComponent> = (args) => (
  <BodyComponent {...args} />
);

export const Body = Template.bind({});
