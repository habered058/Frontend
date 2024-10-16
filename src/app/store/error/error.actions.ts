import { createAction, props } from '@ngrx/store';

export const setGlobalError = createAction('[Error] Set Global Error', props<{ error: string }>());
export const clearGlobalError = createAction('[Error] Clear Global Error');