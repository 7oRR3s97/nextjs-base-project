import { configureStore } from '@reduxjs/toolkit';
import alerts, { initialState as AlertsInitialState } from './alerts/reducer';
import menu, { initialState as MenuInitialState } from './menu/reducer';

export const reducers = {
  alerts,
  menu,
};

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const initialState: RootState = {
  alerts: AlertsInitialState,
  menu: MenuInitialState,
};
