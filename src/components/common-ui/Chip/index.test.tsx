import React from 'react';
import { render, screen, cleanup } from 'helpers/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import Chip from './index';

import * as ChipStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Chip', () => {
  afterEach(() => {
    cleanup();
  });

  const stories = Object.values(composeStories(ChipStories)).map((Story) => {
    return {
      name: Story.storyName!,
      Story,
    };
  });

  it.each(stories)(
    'should have no accessibility error in $name chip story',
    async ({ Story }) => {
      const { container } = render(<Story />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    }
  );

  it.each(stories)('should render a $name chip from story', ({ Story }) => {
    render(<Story data-testid="chip-component" />);

    const chip = screen.queryByTestId('chip-component');
    expect(chip).toMatchSnapshot();
    expect(chip).toBeInTheDocument();
  });

  it('should render a primary chip', () => {
    render(<Chip data-testid="chip-component" label="chip" />);

    const chip = screen.queryByTestId('chip-component');
    expect(chip).toMatchSnapshot();
    expect(chip).toBeInTheDocument();
  });

  it('should render an error chip', () => {
    render(<Chip data-testid="chip-component" label="chip" error />);

    const chip = screen.queryByTestId('chip-component');
    expect(chip).toMatchSnapshot();
    expect(chip).toBeInTheDocument();
  });

  it('should render a warning chip', () => {
    render(<Chip data-testid="chip-component" label="chip" warning />);

    const chip = screen.queryByTestId('chip-component');
    expect(chip).toMatchSnapshot();
    expect(chip).toBeInTheDocument();
  });

  it('should render a success chip', () => {
    render(<Chip data-testid="chip-component" label="chip" success />);

    const chip = screen.queryByTestId('chip-component');
    expect(chip).toMatchSnapshot();
    expect(chip).toBeInTheDocument();
  });
});
