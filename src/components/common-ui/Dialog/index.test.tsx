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
import Dialog from './index';

import * as DialogStories from './index.stories';

expect.extend(toHaveNoViolations);

describe('Dialog', () => {
  let open = true;
  let back = false;
  const handleOpen = (value: boolean) => {
    open = value;
  };

  const handleBack = (value: boolean) => {
    back = value;
  };

  beforeEach(() => {
    open = true;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
  });

  const stories = Object.values(composeStories(DialogStories)).map((Story) => {
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

  it.each(stories)(
    'should run $name story play function and set open to false',
    async ({ Story }) => {
      act(() => {
        render(
          <Story
            data-testid="dialog-component"
            onClose={() => handleOpen(false)}
            handleBack={() => handleBack(true)}
          />
        );
      });

      await act(async () => {
        await Story.play({
          canvasElement: screen.getByTestId('dialog-component'),
        });
      });

      await waitFor(() => {
        expect(open).toBeFalsy();
        expect(back).toBeTruthy();
      });

      expect(screen.queryByTestId('dialog-component')).toMatchSnapshot();
    }
  );

  it('should not render the dialog without dialogTitle and then render it', async () => {
    open = false;

    const { rerender } = render(
      <Dialog
        data-testid="dialog-component"
        open={open}
        onClose={() => handleOpen(false)}
        dialogTitle={false}
      >
        dialog
      </Dialog>
    );

    const nonExistingDialog = screen.queryByTestId('dialog-component');
    expect(nonExistingDialog).toMatchSnapshot();
    expect(nonExistingDialog).not.toBeInTheDocument();

    handleOpen(true);
    expect(open).toBeTruthy();

    rerender(
      <Dialog
        data-testid="dialog-component"
        open={open}
        onClose={() => handleOpen(false)}
        dialogTitle={false}
      >
        dialog
      </Dialog>
    );

    const existingDialog = screen.queryByTestId('dialog-component');
    expect(existingDialog).toMatchSnapshot();
    expect(existingDialog).toBeInTheDocument();
  });

  it('should render the dialog with dialogTitle but without title, subtitle and back button', () => {
    render(
      <Dialog
        data-testid="dialog-component"
        open={open}
        onClose={() => handleOpen(false)}
        dialogTitle
        backButton={false}
      >
        dialog
      </Dialog>
    );

    const dialog = screen.queryByTestId('dialog-component');
    expect(dialog).toMatchSnapshot();
    expect(dialog).toBeInTheDocument();
  });

  it('should close the dialog', () => {
    render(
      <Dialog
        data-testid="dialog-component"
        open={open}
        onClose={() => handleOpen(false)}
        backButton
        dialogTitle
        title="dialog-title"
        subtitle="dialog-subtitle"
        handleBack={() => handleBack(true)}
      >
        dialog
      </Dialog>
    );

    fireEvent.click(screen.getByTestId('CloseIcon'));
    expect(open).toBeFalsy();
  });

  it('should go back on dialog', () => {
    render(
      <Dialog
        data-testid="dialog-component"
        open={open}
        onClose={() => handleOpen(false)}
        backButton
        dialogTitle
        title="dialog-title"
        subtitle="dialog-subtitle"
        handleBack={() => handleBack(true)}
      >
        dialog
      </Dialog>
    );

    fireEvent.click(screen.getByTestId('ArrowBackIcon'));
    expect(back).toBeTruthy();
  });
});
