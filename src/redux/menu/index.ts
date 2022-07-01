import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';

import { RootState } from '../store';

import * as actionCreators from './actions';

import { MenuState } from './types';

export const useMenu = () => {
  const rootState = useAppSelector((state: RootState) => state);
  const state: MenuState = rootState.menu;

  const dispatch = useAppDispatch();
  const actions = {
    setOpenEditData: useCallback(
      (value: MenuState['editData']) =>
        dispatch(actionCreators.setOpenEditData(value)),
      [dispatch]
    ),
  };

  return {
    ...state,
    ...actions,
  };
};
