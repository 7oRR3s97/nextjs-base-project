import React from 'react';
import { render, screen, cleanup } from 'helpers/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import Button from './index';

import * as ButtonStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  const stories = Object.values(composeStories(ButtonStories)).map((Story) => {
    return {
      name: Story.storyName!,
      Story,
    };
  });

  it.each(stories)(
    'should have no accessibility error in $name button story',
    async ({ Story }) => {
      const { container } = render(<Story />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    }
  );

  it.each(stories)('should render a $name button from story', ({ Story }) => {
    render(<Story data-testid="button-component" />);

    const button = screen.queryByTestId('button-component');
    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render a Filled Button', async () => {
    render(
      <Button
        data-testid="button-component"
        layout="filled"
        fullWidth={false}
        isLoading={false}
        disabled={false}
        newWindow={false}
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render a loading filled button', () => {
    render(
      <Button
        data-testid="button-component"
        layout="filled"
        fullWidth={false}
        isLoading
        disabled={false}
        newWindow={false}
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render an Icon Filled button', () => {
    render(
      <Button
        data-testid="button-component"
        layout="filled"
        fullWidth={false}
        isLoading={false}
        icon={<div />}
        disabled={false}
        newWindow={false}
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render a href Filled Button', () => {
    render(
      <Button
        data-testid="button-component"
        layout="filled"
        fullWidth={false}
        isLoading={false}
        href="https://kizi.com.br"
        disabled={false}
        newWindow={false}
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render a href newWindow Filled Button', () => {
    render(
      <Button
        data-testid="button-component"
        layout="filled"
        fullWidth={false}
        isLoading={false}
        href="https://kizi.com.br"
        newWindow
        disabled={false}
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });

  it('should render a disabled Filled Button', () => {
    render(
      <Button
        data-testid="button-component"
        fullWidth={false}
        isLoading={false}
        disabled
      >
        button
      </Button>
    );

    const button = screen.queryByTestId('button-component');

    expect(button).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });
});
