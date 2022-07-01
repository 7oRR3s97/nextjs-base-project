import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';

import { RootState } from '../store';

import * as actionCreators from './actions';

import { AlertsState } from './types';

export const useAlerts = () => {
  const rootState = useAppSelector((state: RootState) => state);
  const state: AlertsState = rootState.alerts;

  const dispatch = useAppDispatch();
  const actions = {
    setIncompleteUserData: useCallback(
      (value: boolean) => dispatch(actionCreators.setIncompleteUserData(value)),
      [dispatch]
    ),
    setSuccessfullyEditedData: useCallback(
      (value: boolean) =>
        dispatch(actionCreators.setSuccessfullyEditedData(value)),
      [dispatch]
    ),
    setDisallowedChainAlert: useCallback(
      (value: boolean) =>
        dispatch(actionCreators.setDisallowedChainAlert(value)),
      [dispatch]
    ),
    setVerifyEmail: useCallback(
      (value: boolean) => dispatch(actionCreators.setVerifyEmail(value)),
      [dispatch]
    ),
    setEmailVerified: useCallback(
      (value: boolean) => dispatch(actionCreators.setEmailVerified(value)),
      [dispatch]
    ),
    setWeb3DisabledAlert: useCallback(
      (value: boolean) => dispatch(actionCreators.setWeb3DisabledAlert(value)),
      [dispatch]
    ),
    setWithdrawSuccessful: useCallback(
      (value: boolean) => dispatch(actionCreators.setWithdrawSuccessful(value)),
      [dispatch]
    ),
    setWithdrawFailure: useCallback(
      (value: boolean) => dispatch(actionCreators.setWithdrawFailure(value)),
      [dispatch]
    ),
    setDepositFailure: useCallback(
      (value: boolean) => dispatch(actionCreators.setDepositFailure(value)),
      [dispatch]
    ),
  };

  return {
    ...state,
    ...actions,
  };
};
