import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpaceState } from '../interfaces/space.interface';


export const selectSpaceState = createFeatureSelector<SpaceState>('space');

export const selectAllSpaces = createSelector(selectSpaceState, (state) => state.spaces);

export const selectLoading = createSelector(selectSpaceState, (state) => state.loading);

export const selectError = createSelector(selectSpaceState, (state) => state.error);
