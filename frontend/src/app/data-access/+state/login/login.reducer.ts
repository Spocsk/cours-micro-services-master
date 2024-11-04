import { createReducer, on } from '@ngrx/store';
import { loginAction, loginSuccessAction } from './login.actions';

export interface DefaultLoginState {
  access_token: string;
}

export const initialState: DefaultLoginState = {
  access_token: '',
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, { access_token }) => ({
    ...state,
    access_token,
  }))
);
