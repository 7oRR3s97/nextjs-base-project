import { renderHook, cleanup, waitFor, act } from 'helpers/test-utils';
import { KeepTypeFromObject } from 'helpers/typescript/generics';
import { useMenu } from './index';

describe('MenuRedux', () => {
  afterEach(() => {
    cleanup();
  });

  interface BooleanStatesAndActionsType {
    state: keyof KeepTypeFromObject<ReturnType<typeof useMenu>, boolean>;
    action: keyof KeepTypeFromObject<
      ReturnType<typeof useMenu>,
      (value: boolean) => {
        payload: boolean;
        type: string;
      }
    >;
  }

  const booleanStatesAndActions: BooleanStatesAndActionsType[] = [
    {
      state: 'editData',
      action: 'setOpenEditData',
    },
  ];

  it.each(booleanStatesAndActions)(
    'should call $action and change $state value',
    ({ state, action }) => {
      const { result, rerender } = renderHook(() => useMenu());

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
