import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DesktopLogoComponent from './index';

const GridLogo = styled(Grid)(({ theme }) => ({
  width: 90,
  height: 90,
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    width: 215,
  },
}));

export default {
  title: 'Components/Logo',
  component: DesktopLogoComponent,
  decorators: [
    (Story) => (
      <GridLogo>
        <Story />
      </GridLogo>
    ),
  ],
} as ComponentMeta<typeof DesktopLogoComponent>;

const Template: ComponentStory<typeof DesktopLogoComponent> = (args) => (
  <DesktopLogoComponent {...args} />
);

export const DesktopLogo = Template.bind({});
