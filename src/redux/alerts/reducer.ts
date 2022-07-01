import { createReducer } from '@reduxjs/toolkit';
import { AlertsState } from './types';
import * as actions from './actions';

export const initialState: AlertsState = {
  incompleteUserData: false,
  successfullyEditedData: false,
  disallowedChainAlert: false,
  verifyEmail: false,
  emailVerified: false,
  web3disabled: false,
  withdrawSuccessful: false,
  withdrawFailure: false,
  depositFailure: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setIncompleteUserData, (state, action) => {
      state.incompleteUserData = action.payload;
    })
    .addCase(actions.setSuccessfullyEditedData, (state, action) => {
      state.successfullyEditedData = action.payload;
    })
    .addCase(actions.setDisallowedChainAlert, (state, action) => {
      state.disallowedChainAlert = action.payload;
    })
    .addCase(actions.setVerifyEmail, (state, action) => {
      state.verifyEmail = action.payload;
    })
    .addCase(actions.setEmailVerified, (state, action) => {
      state.emailVerified = action.payload;
    })
    .addCase(actions.setWeb3DisabledAlert, (state, action) => {
      state.web3disabled = action.payload;
    })
    .addCase(actions.setWithdrawSuccessful, (state, action) => {
      state.withdrawSuccessful = action.payload;
    })
    .addCase(actions.setWithdrawFailure, (state, action) => {
      state.withdrawFailure = action.payload;
    })
    .addCase(actions.setDepositFailure, (state, action) => {
      state.depositFailure = action.payload;
    });
});

export default reducer;
