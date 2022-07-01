import { renderHook, cleanup, waitFor, act } from 'helpers/test-utils';
import { KeepTypeFromObject } from 'helpers/typescript/generics';
import { useAlerts } from './index';

describe('AlertsRedux', () => {
  afterEach(() => {
    cleanup();
  });

  interface BooleanStatesAndActionsType {
    state: keyof KeepTypeFromObject<ReturnType<typeof useAlerts>, boolean>;
    action: keyof KeepTypeFromObject<
      ReturnType<typeof useAlerts>,
      (value: boolean) => {
        payload: boolean;
        type: string;
      }
    >;
  }

  const booleanStatesAndActions: BooleanStatesAndActionsType[] = [
    {
      state: 'incompleteUserData',
      action: 'setIncompleteUserData',
    },
    {
      state: 'successfullyEditedData',
      action: 'setSuccessfullyEditedData',
    },
    {
      state: 'disallowedChainAlert',
      action: 'setDisallowedChainAlert',
    },
    {
      state: 'verifyEmail',
      action: 'setVerifyEmail',
    },
    {
      state: 'emailVerified',
      action: 'setEmailVerified',
    },
    {
      state: 'web3disabled',
      action: 'setWeb3DisabledAlert',
    },
    {
      state: 'withdrawSuccessful',
      action: 'setWithdrawSuccessful',
    },
    {
      state: 'withdrawFailure',
      action: 'setWithdrawFailure',
    },
    {
      state: 'depositFailure',
      action: 'setDepositFailure',
    },
  ];

  it.each(booleanStatesAndActions)(
    'should call $action and change $state value',
    ({ state, action }) => {
      const { result, rerender } = renderHook(() => useAlerts());

      const observedState = result.current[state];
      const fireAction = result.current[action];
      const initialState = observedState;

      expect(initialState).toEqual(observedState);

      act(() => {
        fireAction(!observedState);
      });

      waitFor(() => {
        expect(observedState).toEqual(!initialState);
      });

      rerender();

      expect(observedState).toEqual(initialState);
    }
  );
});
