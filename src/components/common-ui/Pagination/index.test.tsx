import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from 'helpers/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import Pagination from './index';

import * as PaginationStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Pagination', () => {
  let currentPage = 1;
  let loading = false;

  const setCurrentPage = (page: number) => {
    currentPage = page;
  };

  const setLoading = (value: boolean) => {
    loading = value;
  };

  beforeEach(() => {
    loading = false;
    currentPage = 1;
  });

  afterEach(() => {
    cleanup();
  });

  const stories = Object.values(composeStories(PaginationStories)).map(
    (Story) => {
      return {
        name: Story.storyName!,
        Story,
      };
    }
  );

  it.each(stories)(
    'should have no accessibility error in $name story',
    async ({ Story }) => {
      const { container } = render(<Story />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    }
  );

  it.each(stories)(
    'should run $name story play function and set open to false',
    async ({ Story }) => {
      const { container } = render(
        <Story
          data-testid="pagination-component"
          currentPage={currentPage}
          onChange={(_event, value) => setCurrentPage(value)}
        />
      );

      await act(async () => {
        await Story.play({ canvasElement: container });
      });

      await waitFor(() => {
        expect(currentPage).toBe(5);
      });

      expect(screen.queryByTestId('pagination-component')).toMatchSnapshot();
    }
  );

  it('should render a pagination without first and last buttons', () => {
    render(
      <Pagination
        data-testid="pagination-component"
        numberOfPages={10}
        currentPage={currentPage}
        onChange={(_event, page) => setCurrentPage(page)}
        isLoading={loading}
      />
    );

    const pagination = screen.queryByTestId('pagination-component');
    expect(pagination).toMatchSnapshot();
    expect(pagination).toBeInTheDocument();

    expect(screen.queryByTestId('FirstPageIcon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('LastPageIcon')).not.toBeInTheDocument();
  });

  it('should render a pagination with first and last buttons, go to last page and then come back to first page', () => {
    render(
      <Pagination
        data-testid="pagination-component"
        numberOfPages={10}
        currentPage={currentPage}
        onChange={(_event, page) => setCurrentPage(page)}
        isLoading={loading}
        showFirstButton
        showLastButton
      />
    );

    const pagination = screen.queryByTestId('pagination-component');
    expect(pagination).toMatchSnapshot();
    expect(pagination).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('LastPageIcon'));
    expect(currentPage).toBe(10);

    fireEvent.click(screen.getByTestId('FirstPageIcon'));
    expect(currentPage).toBe(10);
  });

  it('should render a pagination, change the current page to 5, set the loading, unset the loading and then set the current page to 7', async () => {
    const { rerender } = render(
      <Pagination
        data-testid="pagination-component"
        numberOfPages={10}
        currentPage={currentPage}
        onChange={(_event, page) => setCurrentPage(page)}
        isLoading={loading}
        siblingCount={2}
      />
    );

    const pagination = screen.queryByTestId('pagination-component');
    expect(pagination).toMatchSnapshot();
    expect(pagination).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Go to page 5'));
    expect(currentPage).toBe(5);

    setLoading(true);
    expect(loading).toBe(true);

    rerender(
      <Pagination
        data-testid="pagination-component"
        numberOfPages={10}
        currentPage={currentPage}
        onChange={(_event, page) => setCurrentPage(page)}
        isLoading={loading}
        siblingCount={2}
      />
    );

    const loadingPagination = screen.queryByTestId('pagination-component');
    expect(loadingPagination).toMatchSnapshot();
    expect(loadingPagination).toBeInTheDocument();

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    expect(screen.queryByLabelText('Go to page 5')).not.toBeInTheDocument();

    setLoading(false);
    expect(loading).toBe(false);

    rerender(
      <Pagination
        data-testid="pagination-component"
        numberOfPages={10}
        currentPage={currentPage}
        onChange={(_event, page) => setCurrentPage(page)}
        isLoading={loading}
        siblingCount={2}
      />
    );

    const updatedPagination = screen.queryByTestId('pagination-component');
    expect(updatedPagination).toMatchSnapshot();
    expect(updatedPagination).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Go to page 7'));
    expect(currentPage).toBe(7);
  });
});
