import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';

import DialogComponent from './index';

export default {
  title: 'CommonUI/Dialog',
  component: DialogComponent,
  argTypes: { onClose: { action: 'closed' }, handleBack: { action: 'back' } },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DialogComponent>;

const Template: ComponentStory<typeof DialogComponent> = (args) => (
  <DialogComponent {...args} />
);

export const Dialog = Template.bind({});
Dialog.args = {
  open: true,
  children: 'dialog',
  dialogTitle: true,
  title: 'dialog title',
  subtitle: 'dialog subtitle',
  backButton: true,
  storybook: true,
};
Dialog.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  fireEvent.click(canvas.getByTestId('ArrowBackIcon'));
  fireEvent.click(canvas.getByTestId('CloseIcon'));
};
