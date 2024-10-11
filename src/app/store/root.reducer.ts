import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../features/auth/store/auth.reducer';
import { AppState } from './app.state';

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer
  // Añade aquí otros reductores de features
};