import { createAction } from '@reduxjs/toolkit';
import { AlertsState } from './types';

export const setIncompleteUserData = createAction<
  AlertsState['incompleteUserData'],
  'alerts/setIncompleteUserData'
>('alerts/setIncompleteUserData');
export const setSuccessfullyEditedData = createAction<
  AlertsState['successfullyEditedData'],
  'alerts/setSuccessfullyEditedData'
>('alerts/setSuccessfullyEditedData');
export const setDisallowedChainAlert = createAction<
  AlertsState['disallowedChainAlert'],
  'alerts/setDisallowedChainAlert'
>('alerts/setDisallowedChainAlert');
export const setVerifyEmail = createAction<
  AlertsState['verifyEmail'],
  'alerts/setVerifyEmail'
>('alerts/setVerifyEmail');
export const setEmailVerified = createAction<
  AlertsState['emailVerified'],
  'alerts/setEmailVerified'
>('alerts/setEmailVerified');
export const setWeb3DisabledAlert = createAction<
  AlertsState['web3disabled'],
  'alerts/setWeb3DisabledAlert'
>('alerts/setWeb3DisabledAlert');
export const setWithdrawSuccessful = createAction<
  AlertsState['withdrawSuccessful'],
  'alerts/setWithdrawSuccessful'
>('alerts/setWithdrawSuccessful');
export const setWithdrawFailure = createAction<
  AlertsState['withdrawFailure'],
  'alerts/setWithdrawFailure'
>('alerts/setWithdrawFailure');
export const setDepositFailure = createAction<
  AlertsState['depositFailure'],
  'alerts/setDepositFailure'
>('alerts/setDepositFailure');
