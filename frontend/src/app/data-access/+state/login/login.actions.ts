import { createAction, props } from '@ngrx/store';
import {
  LoginRequest,
  LoginResponse,
} from '../../../shared/interfaces/login.interfaces';

export const loginAction = createAction('[Login] login', props<LoginRequest>());
export const loginSuccessAction = createAction(
  '[Login] Login Success',
  props<LoginResponse>()
);
