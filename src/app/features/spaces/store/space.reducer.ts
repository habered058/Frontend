import { createReducer, on } from '@ngrx/store';
import * as SpaceActions from './space.actions';
import { initialState, SpaceState } from '../interfaces/space.interface';

export const spaceReducer = createReducer(
  initialState,

  // Cargar espacios
  on(SpaceActions.loadSpaces, (state) => ({ ...state, loading: true })),
  on(SpaceActions.loadSpacesSuccess, (state, { spaces }) => ({ ...state, loading: false, spaces })),
  on(SpaceActions.loadSpacesFailure, (state, { error }) => ({ ...state, loading: false, error })),

  // Agregar espacio
  on(SpaceActions.addSpaceSuccess, (state, { space }) => ({ ...state, spaces: [...state.spaces, space] })),
  on(SpaceActions.addSpaceFailure, (state, { error }) => ({ ...state, error })),

  // Actualizar espacio
  on(SpaceActions.updateSpaceSuccess, (state, { space }) => ({
    ...state,
    spaces: state.spaces.map((s) => (s.id === space.id ? space : s)),
  })),
  on(SpaceActions.updateSpaceFailure, (state, { error }) => ({ ...state, error })),

  // Eliminar espacio
  on(SpaceActions.deleteSpaceSuccess, (state, { id }) => ({
    ...state,
    spaces: state.spaces.filter((space) => space.id !== id),
  })),
  on(SpaceActions.deleteSpaceFailure, (state, { error }) => ({ ...state, error }))
);
