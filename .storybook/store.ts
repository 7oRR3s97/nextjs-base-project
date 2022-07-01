import { configureStore } from '@reduxjs/toolkit';
import { enhancer as StorybookAddonEnhancer } from 'addon-redux';

import { reducers } from 'redux/store';

export const store = configureStore({
  reducer: reducers,
  enhancers: [StorybookAddonEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
