import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DefaultLoginState } from './login.reducer';

export const selectLoginState =
  createFeatureSelector<DefaultLoginState>('login');

export const selectAccessToken = createSelector(
  selectLoginState,
  (state: DefaultLoginState) => state.access_token
);
