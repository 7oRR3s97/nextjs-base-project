import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
  advanceTimersByTime,
} from 'helpers/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import Alert from './index';

import * as AlertStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Alert', () => {
  let open = true;
  const handleOpen = (value: boolean) => {
    open = value;
  };

  beforeEach(() => {
    open = true;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
  });

  const stories = Object.values(composeStories(AlertStories)).map((Story) => {
    return {
      name: Story.storyName!,
      Story,
    };
  });

  it.each(stories)(
    'should have no accessibility error in $name alert story',
    async ({ Story }) => {
      render(<Story data-testid="alert-component" />);
      const alert = screen.getByTestId('alert-component');

      const AxeResults = await axe(alert);
      expect(AxeResults).toHaveNoViolations();
      expect(alert).toMatchSnapshot();
    }
  );

  it.each(stories)(
    'should run $name alert story play function and set open to false',
    async ({ Story }) => {
      jest.useFakeTimers();
      render(
        <Story
          data-testid="alert-component"
          onClose={() => handleOpen(false)}
        />
      );

      await advanceTimersByTime(500);

      await act(async () => {
        await Story.play({
          canvasElement: screen.getByTestId('alert-component'),
        });
      });

      expect(open).toBeFalsy();
    }
  );

  it("should render an alert and then automatically closes it using the component's progressTimeOut function", async () => {
    jest.useFakeTimers();
    render(
      <Alert
        data-testid="alert-component"
        open={open}
        onClose={() => handleOpen(false)}
        severity="error"
        title="error-title"
        message="error-message"
        progress={500}
      />
    );

    const alert = screen.queryByTestId('alert-component');
    expect(alert).toBeInTheDocument();
    expect(alert).toMatchSnapshot();

    await advanceTimersByTime(500);
    expect(open).toBeFalsy();
  });

  it("should not render the alert and then render it without progress, so the component's progressTimeOut function returns undefined", async () => {
    jest.useFakeTimers();
    open = false;

    const { rerender } = render(
      <Alert
        data-testid="alert-component"
        open={open}
        onClose={() => handleOpen(false)}
        severity="error"
        title="error-title"
        message="error-message"
      />
    );

    const nonExistingAlert = screen.queryByTestId('alert-component');

    expect(nonExistingAlert).toMatchSnapshot();
    expect(nonExistingAlert).not.toBeInTheDocument();

    handleOpen(true);
    expect(open).toBeTruthy();

    rerender(
      <Alert
        data-testid="alert-component"
        open={open}
        onClose={() => handleOpen(false)}
        severity="error"
        title="error-title"
        message="error-message"
      />
    );

    await advanceTimersByTime(500);

    expect(open).toBeTruthy();

    const existingAlert = screen.queryByTestId('alert-component');
    expect(existingAlert).toMatchSnapshot();
    expect(existingAlert).toBeInTheDocument();
  });

  it('should close the alert before the progressTimeOut function finishes, triggering a clearTimeOut execution', async () => {
    jest.useFakeTimers();
    render(
      <Alert
        data-testid="alert-component"
        open={open}
        onClose={() => handleOpen(false)}
        severity="error"
        title="error-title"
        message="error-message"
        progress={1000}
      />
    );

    await advanceTimersByTime(500);

    fireEvent.click(screen.getByTitle('Close'));
    expect(open).toBeFalsy();
  });

  it('should render an alert with the action component', () => {
    render(
      <Alert
        data-testid="alert-component"
        open={open}
        onClose={() => handleOpen(false)}
        severity="error"
        title="error-title"
        message="error-message"
        action
      />
    );

    const alert = screen.queryByTestId('alert-component');
    expect(alert).toMatchSnapshot();
    expect(alert).toBeInTheDocument();
  });
});
