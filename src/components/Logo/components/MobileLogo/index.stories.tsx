import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MobileLogoComponent from './index';

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
  component: MobileLogoComponent,
  decorators: [
    (Story) => (
      <GridLogo>
        <Story />
      </GridLogo>
    ),
  ],
} as ComponentMeta<typeof MobileLogoComponent>;

const Template: ComponentStory<typeof MobileLogoComponent> = (args) => (
  <MobileLogoComponent {...args} />
);

export const MobileLogo = Template.bind({});
