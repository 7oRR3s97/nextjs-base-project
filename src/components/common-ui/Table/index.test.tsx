import React from 'react';
import { render, screen, cleanup } from 'helpers/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import Table from './index';

import * as TableStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Table', () => {
  const generateTable = (numberOfColumns: number, numberOfRows: number) => {
    const columns = Array(numberOfColumns)
      .fill(0)
      .map((_value, index) => {
        return {
          Header: `header-${index + 1}`,
          accessor: `header-${index + 1}`,
        };
      });

    const rows = Array(numberOfRows)
      .fill(0)
      .map((_rowValue, rowIndex) => {
        let row: any = {};
        columns.forEach((data) => {
          row[data.accessor] = `row-${rowIndex + 1}-${data.accessor}`;
        });
        return row;
      });

    return { columns, rows };
  };

  afterEach(() => {
    cleanup();
  });

  const stories = Object.values(composeStories(TableStories)).map((Story) => {
    return {
      name: Story.storyName!,
      Story,
    };
  });

  it.each(stories)(
    'should have no accessibility error in $name story',
    async ({ Story }) => {
      const { container } = render(<Story />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    }
  );

  it.each(stories)('should render a $name from story', async ({ Story }) => {
    render(<Story />);

    expect(screen.queryByRole('table')).toMatchSnapshot();
  });

  it('should render a table with 7 columns and 30 rows', () => {
    const { columns, rows } = generateTable(7, 30);
    const { container } = render(<Table columns={columns} data={rows} />);

    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();

    expect(screen.getByText('header-7')).toBeInTheDocument();
    expect(screen.getByText('row-30-header-7')).toBeInTheDocument();
  });

  it('should render a table with no columns and no tables', () => {
    const { columns, rows } = generateTable(0, 0);
    const { container } = render(<Table columns={columns} data={rows} />);

    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();

    expect(screen.queryByText('header-1')).not.toBeInTheDocument();
    expect(screen.queryByText('row-1-header-1')).not.toBeInTheDocument();
  });
});
