import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../features/auth/store/auth.reducer';
import { AppState } from './app.state';
import { spaceReducer } from '../features/spaces/store/space.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  space: spaceReducer
};