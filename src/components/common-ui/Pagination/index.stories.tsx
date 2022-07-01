import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';

import PaginationComponent from './index';

export default {
  title: 'CommonUI/Pagination',
  component: PaginationComponent,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof PaginationComponent>;

const Template: ComponentStory<typeof PaginationComponent> = (args) => (
  <PaginationComponent {...args} />
);

export const Pagination = Template.bind({});
Pagination.args = {
  numberOfPages: 10,
  currentPage: 6,
  isLoading: false,
  showFirstButton: false,
  showLastButton: false,
  shape: 'rounded',
  defaultPage: 1,
  siblingCount: 1,
  boundaryCount: 1,
};
Pagination.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  fireEvent.click(canvas.getByLabelText('Go to page 5'));
};
