import { createAction } from '@reduxjs/toolkit';
import { MenuState } from './types';

export const setOpenEditData = createAction<
  MenuState['editData'],
  'alerts/setOpenEditData'
>('alerts/setOpenEditData');
