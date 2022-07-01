import { createReducer } from '@reduxjs/toolkit';
import { MenuState } from './types';
import * as actions from './actions';

export const initialState: MenuState = {
  editData: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.setOpenEditData, (state, action) => {
    state.editData = action.payload;
  });
});

export default reducer;
