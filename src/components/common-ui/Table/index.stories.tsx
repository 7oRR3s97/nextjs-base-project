import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TableComponent from './index';

export default {
  title: 'CommonUI/Table',
  component: TableComponent,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args} />
);

export const Table = Template.bind({});
Table.args = {
  columns: [
    {
      Header: 'type',
      accessor: 'type',
    },
    {
      Header: 'status',
      accessor: 'status',
    },
    {
      Header: 'amount',
      accessor: 'amount',
    },
    {
      Header: 'tax',
      accessor: 'tax',
    },
    {
      Header: 'paymentId',
      accessor: 'paymentId',
    },
    {
      Header: 'createdAt',
      accessor: 'createdAt',
    },
    {
      Header: 'updatedAt',
      accessor: 'updatedAt',
    },
    {
      Header: 'hash',
      accessor: 'hash',
      style: {
        textAlign: 'center',
      },
    },
  ],
  data: [
    {
      type: 'deposit',
      status: 'success',
      amount: '1000000',
      tax: '0',
      paymentId: '#123456789',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
      hash: '0x01231312313123123',
    },
  ],
};
