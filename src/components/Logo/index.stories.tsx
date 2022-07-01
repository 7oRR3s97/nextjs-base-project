import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoComponent from './index';

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
  component: LogoComponent,
  decorators: [
    (Story) => (
      <GridLogo>
        <Story />
      </GridLogo>
    ),
  ],
} as ComponentMeta<typeof LogoComponent>;

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});
