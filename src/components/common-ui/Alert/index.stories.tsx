import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';

import AlertComponent from './index';

export default {
  title: 'CommonUI/Alert',
  component: AlertComponent,
  argTypes: { onClose: { action: 'closed' } },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AlertComponent>;

const Template: ComponentStory<typeof AlertComponent> = (args) => (
  <AlertComponent data-testid="alert-component" {...args} />
);

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  open: true,
  title: 'alert',
  message: 'alert message',
  action: false,
  progress: 5000,
  sx: { position: 'unset' },
  disablePortal: true,
};
Success.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  fireEvent.click(canvas.getByTitle('Close'));
};

export const Info = Template.bind({});
Info.args = {
  ...Success.args,
  severity: 'info',
};
Info.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  fireEvent.click(canvas.getByTitle('Close'));
};

export const Error = Template.bind({});
Error.args = {
  ...Success.args,
  severity: 'error',
};
Error.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  fireEvent.click(canvas.getByTitle('Close'));
};

export const Warning = Template.bind({});
Warning.args = {
  ...Success.args,
  severity: 'warning',
};
Warning.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  fireEvent.click(canvas.getByTitle('Close'));
};
