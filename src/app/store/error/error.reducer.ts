// reducers/error.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ErrorActions from './error.actions';

export interface ErrorState {
  globalError: string | null;
}

export const initialState: ErrorState = {
  globalError: null
};

export const errorReducer = createReducer(
  initialState,
  on(ErrorActions.setGlobalError, (state, { error }) => ({ ...state, globalError: error })),
  on(ErrorActions.clearGlobalError, (state) => ({ ...state, globalError: null }))
);